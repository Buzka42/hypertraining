import { useState } from 'react';
import { ChevronDown, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData: { question: React.ReactNode; answer: React.ReactNode }[] = [
        {
            question: t(<>Czy przyjmujesz na trening siłowy od podstaw<span className="sr-only"> Praga Południe</span> osoby bez żadnego doświadczenia?</>, <>Do you accept beginners for strength training from scratch<span className="sr-only"> Praga Południe</span> with absolutely no experience?</>),
            answer: t(<>Zdecydowanie tak. Jako trener personalny dla początkujących<span className="sr-only"> Gocław</span>, moją podstawową specjalizacją jest wdrażanie od zera. Nauka techniki ćwiczeń<span className="sr-only"> Gocław</span> opiera się u mnie na precyzyjnej biomechanice. Zanim weźmiesz jakikolwiek ciężar, uczymy układ nerwowy poprawnego wzorca ruchu. To najszybsza droga do wyników bez kontuzji.</>, <>Absolutely. As a personal trainer for beginners<span className="sr-only"> Warszawa Praga / Gocław</span>, my core expertise is initiating from zero. Exercise technique mastery<span className="sr-only"> Gocław</span> is based on precise biomechanics. Before you lift any weight, we teach your nervous system the correct movement pattern. This is the fastest route to results without injuries.</>)
        },
        {
            question: t("Gdzie prowadzone są nasze sesje i jaki jest koszt karnetu?", "Where are our sessions held and what is the gym membership cost?"),
            answer: t(<>Baza operacyjna to siłownia Well Fitness na Gocławiu. Jako pracujący tam trener personalny<span className="sr-only"> Well Fitness Gocław</span> mam dostęp do najwyższej klasy sprzętu. Masz pewność, że sprzęt nie jest ograniczeniem w realizacji programów treningowych. Koszt wejścia to cena standardowego karnetu do tej siłowni – nie ponosisz dodatkowych opłat członkowskich z mojej strony.</>, <>The operational base is the Well Fitness gym in Gocław. As a personal trainer working there<span className="sr-only"> Well Fitness personal trainer Warszawa Praga</span>, I have access to top-tier equipment. You can be certain that hardware will not limit your training programs. The entry fee is the standard membership cost of the gym — you bear no additional membership fees from my side.</>)
        },
        {
            question: t("Czy prowadzisz treningi pomagające w bólach kręgosłupa lub po urazach?", "Do you conduct workouts to help with back pain or post-injury recovery?"),
            answer: t(<>Tak, to jedno z częstszych skierowań. Wdrażam celowane ćwiczenia na zdrowy kręgosłup<span className="sr-only"> Gocław</span>, przywracając mobilność i stabilność centralną. Analizuję dysbalans mięśniowy i usuwam pierwotną przyczynę bólu ruchem, zamiast go maskować.</>, <>Yes, this is one of the most frequent referrals. I implement targeted exercises for a healthy spine<span className="sr-only"> Warszawa Praga</span>, restoring mobility and core stability. I analyze muscle imbalances and eliminate the root cause of pain through movement, rather than masking it.</>)
        },
        {
            question: t("Jak wygląda współpraca z kobietami i powrót do formy po ciąży?", "How does collaboration with women and post-partum recovery look?"),
            answer: t(<>Zdaję sobie sprawę, że ciało po ciąży wymaga ostrożnej i specjalistycznej kalibracji. Działając jako trener personalny dla kobiet<span className="sr-only"> Gocław</span> prowadzę kontrolowany i bezpieczny powrót do formy po ciąży<span className="sr-only"> Gocław</span>. Obejmuje to zoptymalizowane wzmacnianie mięśni dna miednicy i przywracanie napięcia mięśni głębokich przed przejściem do klasycznego dźwigania.</>, <>I realize the post-partum body requires careful and specialized calibration. Acting as a personal trainer for women<span className="sr-only"> Warszawa Praga</span> I lead a controlled and safe post-partum recovery<span className="sr-only"> Gocław</span>. This includes optimized strengthening of pelvic floor muscles and restoring deep muscle tension before transitioning to classic lifting.</>)
        },
        {
            question: t("Czy przygotowujesz do egzaminów i specyficznych sportów?", "Do you prepare for physical exams and specific sports?"),
            answer: t(<>Dokładnie. Moje programy obejmują precyzyjne przygotowanie do testów sprawnościowych<span className="sr-only"> Warszawa Gocław</span> (wojsko, policja, straż). Ponadto implementuję trening dynamiki dla zwiększenia siły balistycznej oraz oferuję pełny zestaw ćwiczeń kalistenicznych, aby zwiększyć ogólną sprawność organizmu.</>, <>Exactly. My programs cover precise physical fitness test preparation<span className="sr-only"> Warszawa Praga Gocław</span> (military, police, fire dept). Furthermore, I implement dynamic training to increase ballistic strength and offer a full set of calisthenics exercises to enhance overall body conditioning.</>)
        },
        {
            question: t("Czy jest możliwość trenowania z partnerem?", "Is it possible to train with a partner?"),
            answer: t(<>Tak. Prowadzę treningi personalne dla par<span className="sr-only"> Gocław</span>. Optymalizujemy czas i koszty, zachowując indywidualne dostosowanie parametrów dla każdej osoby w trakcie samej sesji bez utraty jakości na linii trener personalny<span className="sr-only"> Praga Południe</span> - uczeń.</>, <>Yes. I conduct personal training for couples<span className="sr-only"> Warszawa Praga</span>. We optimize time and cost while maintaining individual parameter adjustments for each person during the session itself, without losing quality in the personal trainer<span className="sr-only"> Praga Południe</span> - student connection.</>)
        },
        {
            question: t("Czy wiek jest przeszkodą? Mam powyżej 60 lat.", "Is age an obstacle? I am over 60 years old."),
            answer: t(<>Żadna zmienna nie jest przeszkodą, jeśli dysponujemy odpowiednimi danymi. Prowadząc trening dla seniorów<span className="sr-only"> Gocław</span> kalibruję objętość i intensywność tak, by realnie opóźniać procesy sarkopenii (utraty masy mięśniowej) i wzmacniać gęstość kości. Trening personalny w moim wykonaniu jest dla każdego, kroki są odpowiednio dobierane do statusu układu ruchu.</>, <>No variable is an obstacle if we have the right data. When executing training for seniors<span className="sr-only"> Warszawa Praga</span> I calibrate volume and intensity to tangibly delay sarcopenia (muscle loss) and strengthen bone density. My personal training is for everyone; steps are appropriately tailored to your musculoskeletal status.</>)
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-hyper-black min-h-screen pt-32 pb-24 text-white relative">
            <div className="absolute inset-0 grid-bg opacity-20" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <header className="mb-16">
                    <div className="inline-flex items-center gap-2 border border-hyper-indigo/40 bg-hyper-indigo/10 text-hyper-indigo font-mono text-xs px-3 py-1 uppercase font-bold tracking-widest mb-4">
                        <Database size={14} /> Knowledge Base
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
                        {t(<>Baza <span className="text-hyper-indigo">Wiedzy</span></>, <>Knowledge <span className="text-hyper-indigo">Base</span></>)}
                    </h1>
                    <p className="font-mono text-sm text-hyper-light/70 max-w-2xl border-l border-hyper-indigo pl-4">
                        {t(<>Najczęściej zadawane pytania - wyczerpujące dane, minimalizujące niepewność. Przejrzyj logi przed nawiązaniem połączenia ze sprawdzonym <span className="text-hyper-light">trener personalny Gocław</span>.</>, <>Frequently asked questions - comprehensive data, minimizing uncertainty. Review the logs before establishing a link with a proven <span className="text-hyper-light">personal trainer Warszawa Praga / Gocław</span>.</>)}
                    </p>
                </header>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`border transition-colors duration-500 bg-hyper-dark ${openIndex === index ? 'border-hyper-indigo shadow-[0_0_15px_rgba(67,56,202,0.15)]' : 'border-hyper-gray/50 hover:border-hyper-light/30'}`}
                        >
                            <button
                                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-wide text-hyper-light/90">
                                    <span className="text-hyper-indigo mr-4 font-mono text-sm opacity-60">
                                        / 0{index + 1}
                                    </span>
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="text-hyper-indigo shrink-0 ml-4"
                                >
                                    <ChevronDown size={24} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 font-mono text-sm text-hyper-light/70 leading-relaxed border-t border-hyper-gray/30 pt-4 mt-2">
                                            <p className="border-l-2 border-hyper-indigo pl-4">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
