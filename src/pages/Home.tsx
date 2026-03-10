import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Terminal, Activity, Zap, ShieldAlert, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const { t } = useLanguage();
    const container = useRef(null);
    const navigate = useNavigate();
    const [currentPlanIndex, setCurrentPlanIndex] = useState(0);

    const plans = [
        { img: '/hyperplanner/SKELETON.png', name: 'From Skeleton to Threat' },
        { img: '/hyperplanner/benchdomination.png', name: 'Bench Press Domination' },
        { img: '/hyperplanner/painglory.png', name: 'Pain & Glory' },
        { img: '/hyperplanner/peachy.png', name: 'Peachy' },
        { img: '/hyperplanner/pencilneck.png', name: 'Pencilneck Eradication Protocol' },
        { img: '/hyperplanner/ritual.png', name: 'Ritual of Strength' },
        { img: '/hyperplanner/supermutant.png', name: 'Super Mutant' },
        { img: '/hyperplanner/trinary.png', name: 'Trinary' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPlanIndex((prev) => (prev + 1) % plans.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.fromTo('.hero-text',
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: 'power4.out',
                    delay: 0.2
                }
            );

            // About Section Scroll
            gsap.fromTo('.about-content',
                { x: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '#about',
                        start: 'top 80%',
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out'
                }
            );

            gsap.fromTo('.about-image',
                { x: -50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '#about',
                        start: 'top 80%',
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out'
                }
            );

            // Horizontal Marquee
            gsap.to('.marquee-inner', {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: 'linear'
            });

            // Pricing Cards Stagger
            gsap.fromTo('.pricing-card',
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '#pricing',
                        start: 'top 75%'
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out'
                }
            );

            // Hyperplanner Reveal
            gsap.fromTo('.hyperplanner-grid',
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '#hyperplanner',
                        start: 'top 70%'
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out'
                }
            );

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="bg-hyper-black text-white w-full">
            {/* 1. HERO SECTION */}
            <section id="hero" className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
                {/* Moody gym background w/ indigo gradient overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
                    style={{ backgroundImage: 'url(/gallery/gym1.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-hyper-black/40 via-hyper-indigo/10 to-hyper-black" />
                <div className="absolute inset-0 grid-bg opacity-30" />

                <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl">
                    <div className="hero-text overflow-hidden mb-4 rounded-md border border-hyper-indigo/30 bg-hyper-indigo/10 px-4 py-1 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-hyper-indigo animate-pulse" />
                        <span className="font-mono text-xs tracking-widest text-hyper-light uppercase">{t('Zero Zgadywania', 'Science Based')}</span>
                    </div>
                    <h1 className="hero-text font-heading text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-6 leading-none">
                        {t(<>Nauka. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-hyper-indigo to-blue-400">Nie Przypadek.</span></>, <>Science. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-hyper-indigo to-blue-400">No Guesswork.</span></>)}
                    </h1>
                    <p className="hero-text font-mono text-hyper-light/70 text-sm md:text-base max-w-2xl mb-12 border-l-2 border-hyper-indigo pl-4 text-left">
                        {t(<>Elitarny <span className="text-white">trener personalny Warszawa Praga</span> / Gocław dla najbardziej wymagających. Twarda architektura sylwetki oparta na powtarzalnych danych. Skuteczny trening siłowy od podstaw, przygotowanie motoryczne i powrót do formy.</>, <>Elite personal trainer<span className="sr-only"> Warszawa Praga / Gocław</span> for the most demanding. Hard data-driven physique architecture. Effective strength training from scratch, athletic conditioning, and getting back in shape.</>)}
                    </p>
                    <button
                        className="hero-text group relative flex items-center gap-4 bg-hyper-indigo text-white px-8 py-4 font-heading font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-hyper-black transition-all overflow-hidden"
                        onClick={() => { const el = document.getElementById('about'); el?.scrollIntoView({ behavior: 'smooth' }); }}
                    >
                        <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                        <span>{t('Zainicjuj Transformację', 'Initiate Transformation')}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </section>

            {/* 2. ABOUT ME */}
            <section id="about" className="py-24 relative border-t border-hyper-gray/50 w-full">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Scanning image placeholder */}
                    <div className="about-image relative aspect-[4/5] bg-hyper-dark border border-hyper-gray overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('/hyperplanner/SKELETON.png')] bg-cover bg-center mix-blend-screen opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-hyper-indigo mix-blend-multiply opacity-20" />
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-hyper-indigo/80 shadow-[0_0_10px_#4338CA] animate-[scan_3s_ease-in-out_infinite] z-20" />
                        <div className="absolute bottom-4 right-4 bg-hyper-black/80 backdrop-blur-md border border-hyper-indigo/40 px-3 py-2 font-mono text-[10px] text-hyper-indigo flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-hyper-indigo animate-pulse" /> PATRYK DĘBOWSKI
                        </div>
                        {/* Added an actual placeholder face/body image behind the skeleton, or let SKELETON be the visual */}
                    </div>

                    <div className="about-content flex flex-col justify-center">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
                            {t(<>Architekt <span className="text-hyper-indigo">Sylwetki.</span></>, <>Physique <span className="text-hyper-indigo">Architect.</span></>)}
                        </h2>

                        <div className="bg-hyper-dark border border-hyper-gray rounded-sm p-6 font-mono text-sm space-y-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] relative">
                            <Terminal className="absolute top-4 right-4 text-hyper-gray/50 w-6 h-6" />
                            <div className="flex gap-4 border-b border-hyper-gray/50 pb-4">
                                <span className="text-hyper-indigo">{t('> Nazwa_kodowa:', '> Codename:')}</span>
                                <span className="text-white">Patryk Dębowski</span>
                            </div>
                            <div className="flex gap-4 border-b border-hyper-gray/50 pb-4">
                                <span className="text-hyper-indigo">{t('> Baza_operacyjna:', '> Operational_Base:')}</span>
                                <span className="text-white">Well Fitness, Warszawa Gocław / Praga Południe</span>
                            </div>
                            <div className="flex gap-4 border-b border-hyper-gray/50 pb-4">
                                <span className="text-hyper-indigo">{t('> Parametry:', '> Parameters:')}</span>
                                {t(<ul className="text-hyper-light/80 space-y-2">
                                    <li>- 14 lat stażu skompresowane w twarde algorytmy</li>
                                    <li>- Certyfikowany <span className="sr-only">trener personalny Warszawa Praga</span> Trener Personalny i Instruktor Kulturystyki</li>
                                    <li>- Specjalizacja: Trójbój Siłowy, Hipertrofia, Redukcja</li>
                                    <li>- Szerokie doświadczenie z dietami roślinnymi</li>
                                </ul>, <ul className="text-hyper-light/80 space-y-2">
                                    <li>- 14 years of experience compressed into hard protocols</li>
                                    <li>- Certified <span className="sr-only">personal trainer Warszawa Praga</span> Personal Trainer & Bodybuilding Instructor</li>
                                    <li>- Specialization: Powerlifting, Hypertrophy, Fat loss</li>
                                    <li>- Extensive experience with plant-based diets</li>
                                </ul>)}
                            </div>
                            <div className="flex gap-4 pt-2">
                                <span className="text-hyper-indigo">{t('> Cel_operacji:', '> Mission_Objective:')}</span>
                                {t(<span className="text-white">Optymalna rozbudowa masy, redukcja balastu i skalowanie siły. Ostateczny <span className="text-hyper-indigo font-bold">trener personalny Warszawa Praga</span> dla początkujących i zaawansowanych.</span>, <span className="text-white">Optimal muscle mass building, reducing excess body fat, and scaling strength. The ultimate <span className="text-hyper-indigo font-bold">personal trainer</span><span className="sr-only"> Warszawa Praga</span> for beginners and advanced athletes.</span>)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marquee */}
                <div className="mt-24 w-full bg-hyper-indigo text-white py-4 overflow-hidden relative rotate-[-1deg] scale-105 border-y border-hyper-indigo">
                    <div className="marquee-inner flex whitespace-nowrap font-heading text-2xl uppercase tracking-widest font-bold">
                        <span className="mx-8">/ PERSONAL TRAINER<span className="sr-only"> WARSZAWA PRAGA</span> / HEALTHY SPINE / POST-PARTUM RECOVERY / EXERCISE TECHNIQUE MASTERY / STRENGTH TRAINING FROM SCRATCH / </span>
                        <span className="mx-8">/ PERSONAL TRAINER<span className="sr-only"> PRAGA POŁUDNIE</span> / CALISTHENICS TRAINING / POST-PARTUM RECOVERY / PERSONAL TRAINER FOR BEGINNERS<span className="sr-only"> WARSZAWA</span> / STRENGTH TRAINING FROM SCRATCH / </span>
                        <span className="mx-8">/ WELL FITNESS PERSONAL TRAINER / PHYSICAL FITNESS TEST PREPARATION / POST-PARTUM RECOVERY / ADVANCED PERSONAL TRAINER<span className="sr-only"> WARSZAWA PRAGA</span> / STRENGTH TRAINING FROM SCRATCH / </span>
                    </div>
                </div>
            </section>

            {/* 3. PRICING */}
            <section id="pricing" className="py-24 relative bg-hyper-black w-full border-t border-hyper-gray/50">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 text-white">
                            {t(<><span className="text-hyper-indigo">Protokoły</span> Transakcyjne.</>, <><span className="text-hyper-indigo">Transaction</span> Protocols.</>)}
                        </h2>
                        <p className="font-mono text-sm text-hyper-light/60 max-w-xl mx-auto">
                            {t('Zoptymalizowane bloki treningowe. Cena za pojedynczy moduł w bloku.', 'Optimized training packages. Price per single module in a block.')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {(t([
                            { id: 1, label: '1 Trening', price: '150', total: '150', highlight: false, desc: ['Analiza techniki ruchu', 'Konsultacja biomechaniczna', 'Precyzyjne wytyczne do pracy samodzielnej'] },
                            { id: 4, label: 'Pakiet 4', price: '130', total: '520', highlight: false, desc: ['Treningi 1x w tygodniu', 'Wdrożenie do protokołu', 'Dostęp do aplikacji Systemowej'] },
                            { id: 8, label: 'Pakiet 8', price: '120', total: '960', highlight: false, desc: ['Treningi 2x w tygodniu', 'Szybsza adaptacja nerwowa', 'Dostęp do aplikacji Systemowej'] },
                            { id: 12, label: 'Pakiet 12', price: '110', total: '1320', highlight: true, desc: ['Treningi 3x w tygodniu', 'Maksymalizacja przyrostów', 'Dostęp do aplikacji Systemowej'] },
                            { id: 16, label: 'Pakiet 16', price: '105', total: '1680', highlight: false, desc: ['Treningi 4x w tygodniu', 'Reżim profesjonalnego atlety', 'Dostęp do aplikacji Systemowej'] },
                        ], [
                            { id: 1, label: '1 Session', price: '150', total: '150', highlight: false, desc: ['Movement technique analysis', 'Biomechanics consultation', 'Precise guidelines for solo work'] },
                            { id: 4, label: 'Package 4', price: '130', total: '520', highlight: false, desc: ['Sessions 1x per week', 'Protocol implementation', 'System app access'] },
                            { id: 8, label: 'Package 8', price: '120', total: '960', highlight: false, desc: ['Sessions 2x per week', 'Faster neural adaptation', 'System app access'] },
                            { id: 12, label: 'Package 12', price: '110', total: '1320', highlight: true, desc: ['Sessions 3x per week', 'Maximum strength gains', 'System app access'] },
                            { id: 16, label: 'Package 16', price: '105', total: '1680', highlight: false, desc: ['Sessions 4x per week', 'Professional athlete regimen', 'System app access'] },
                        ]) as any[]).map((tier: any) => (
                            <div
                                key={tier.id}
                                className={`pricing-card bg-hyper-dark relative border p-6 flex flex-col justify-between transition-all duration-300 ${tier.highlight ? 'border-hyper-indigo shadow-[0_0_30px_rgba(67,56,202,0.15)] -translate-y-4 lg:-translate-y-4' : 'border-hyper-gray hover:border-hyper-light/50 hover:-translate-y-2'}`}
                            >
                                {tier.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-hyper-indigo text-white text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-widest whitespace-nowrap z-10">
                                        {t('Optymalny Output', 'Optimal Output')}
                                    </div>
                                )}
                                <div>
                                    <h3 className="font-mono text-hyper-light/50 text-[10px] mb-2 uppercase tracking-widest">{t('Wariant Modelu', 'Model Variant')}</h3>
                                    <div className="font-heading text-2xl xl:text-xl font-bold text-white mb-6 uppercase flex items-center justify-between">
                                        {tier.label}
                                        {tier.highlight && <Zap className="text-hyper-indigo shrink-0" size={18} />}
                                    </div>
                                    <div className="flex items-end gap-1 mb-1">
                                        <span className="font-mono text-3xl xl:text-2xl text-white font-bold">{tier.price}</span>
                                        <span className="font-mono text-xs text-hyper-indigo mb-1">PLN / ses.</span>
                                    </div>
                                    <div className="font-mono text-[9px] text-hyper-light/40 border-b border-hyper-gray/50 pb-4 mb-4 uppercase tracking-wider">
                                        {t(`Inwestycja: ${tier.total} PLN`, `Base investment: ${tier.total} PLN`)}
                                    </div>
                                    <ul className="font-mono text-[11px] text-hyper-light/80 space-y-3">
                                        {tier.desc.map((d: any, i: number) => (
                                            <li key={i} className="flex gap-2 items-start leading-tight">
                                                <ChevronRight size={12} className="text-hyper-indigo shrink-0 mt-0.5" />
                                                <span>{d}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 w-full bg-hyper-dark border border-hyper-gray p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-hyper-indigo transition-colors duration-500">
                        <div>
                            <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2 flex items-center gap-3">
                                <ShieldAlert className="text-hyper-indigo" /> {t('Specjalistyczne Protokoły', 'Specialized Protocols')}
                            </h3>
                            <p className="font-mono text-sm text-hyper-light/60 max-w-2xl text-balance">
                                {t(<>W ofercie również: <br />
                                    <span className="text-hyper-light line-through mr-2">Zwykły trening</span> Prowadzenie Trójbojowe (Coaching), Przygotowanie Sylwetkowe do zawodów Kulturystycznych (Prep Coaching), Trening Kalisteniczny na drążkach oraz przygotowanie do testów sprawnościowych<span className="sr-only"> na Gocławiu</span>.</>, <>Other services offered: <br />
                                    <span className="text-hyper-light line-through mr-2">Basic training</span> Powerlifting Coaching, Bodybuilding Prep, Calisthenics Training (outdoor gyms) & Physical fitness test prep<span className="sr-only"> in Praga</span>.</>)}
                            </p>
                        </div>
                        <button
                            onClick={() => navigate('/contact')}
                            className="shrink-0 bg-transparent border border-hyper-indigo text-hyper-indigo px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-hyper-indigo hover:text-white transition-all shadow-[inset_0_0_10px_rgba(67,56,202,0.2)] hover:shadow-[0_0_20px_rgba(67,56,202,0.6)]"
                        >
                            {t('Wyślij zapytanie', 'Submit inquiry')}
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. HYPERPLANNER SHOWCASE */}
            <section id="hyperplanner" className="py-24 relative bg-hyper-black w-full border-t border-hyper-gray/50 overflow-hidden">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hyper-indigo/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center hyperplanner-grid hidden md:grid">

                    <div className="order-2 lg:order-1 relative">
                        <div className="relative aspect-square max-w-md mx-auto z-10 p-2 border border-hyper-gray/30 bg-hyper-dark shadow-2xl rounded-3xl overflow-hidden group">
                            <div className="absolute inset-x-0 top-0 h-10 bg-black/60 backdrop-blur-md z-20 flex items-center justify-center border-b border-hyper-gray/50">
                                <div className="w-16 h-1 rounded-full bg-hyper-light/20"></div>
                            </div>
                            <img src={plans[currentPlanIndex].img} alt={plans[currentPlanIndex].name} className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700 rounded-[1.25rem] scale-102 group-hover:scale-100" />

                            {/* Overlay telemetry UI element */}
                            <div className="absolute top-16 left-4 bg-hyper-black/80 backdrop-blur-md border border-hyper-indigo text-white font-mono text-[10px] px-2 py-1 rounded flex flex-col gap-1 shadow-[0_0_10px_rgba(67,56,202,0.3)] max-w-[80%]">
                                <span className="text-hyper-indigo font-bold tracking-widest uppercase">{plans[currentPlanIndex].name}</span>
                            </div>
                        </div>

                        {/* Background tech decors */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-hyper-indigo/10 rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-dashed border-hyper-indigo/20 rounded-full animate-[spin_40s_linear_reverse_infinite]" />
                    </div>

                    <div className="order-1 lg:order-2 flex flex-col items-start prose prose-invert prose-p:font-mono prose-p:text-sm prose-p:text-hyper-light/70 prose-headings:font-heading prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white prose-li:font-mono prose-li:text-sm max-w-none prose-strong:text-hyper-indigo prose-strong:font-normal marker:text-hyper-indigo">
                        <div className="mb-4 inline-flex items-center gap-2 border border-hyper-indigo/40 bg-hyper-indigo/10 text-hyper-light font-mono text-xs px-3 py-1 uppercase font-bold tracking-widest">
                            Hyper<span className="text-hyper-indigo">Planner</span>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2">
                                    {t(<>Hyper<span className="text-hyper-indigo">Planner</span> – Twój osobisty trener w kieszeni</>, <>Hyper<span className="text-hyper-indigo">Planner</span> – Your personal trainer in your pocket</>)}
                                </h3>
                                <p className="font-mono text-sm text-hyper-light/70 text-balance leading-relaxed">
                                    {t(<><span className="text-hyper-indigo font-bold">HyperPlanner</span> to nowoczesna aplikacja do planowania treningów siłowych i hipertrofii, stworzona dla tych, którzy chcą trenować mądrze, a nie na ślepo. Dzięki precyzyjnym algorytmom progresji, automatycznym deloadom i indywidualnemu dostosowaniu planów, pomagamy osiągać realne przyrosty siły i masy mięśniowej bez zgadywania.</>, <><span className="text-hyper-indigo font-bold">HyperPlanner</span> is a modern app for planning strength and hypertrophy training, created for those who want to train smart, not blind. With precise progression algorithms, automatic deloads, and individually tailored plans, we help you achieve real strength and muscle mass gains with zero guesswork.</>)}
                                </p>
                            </div>

                            <div>
                                <h3 className="font-heading text-xl font-bold uppercase text-white mb-2">
                                    {t('Specjalistyczne programy dla każdego poziomu', 'Specialized programs for every level')}
                                </h3>
                                <p className="font-mono text-sm text-hyper-light/70 text-balance leading-relaxed">
                                    {t(<>Od programu <span className="text-hyper-indigo">"From Skeleton to Threat"</span> – idealnego dla kompletnych początkujących, który buduje fundamenty siły i techniki od zera – przez klasyczne <span className="text-hyper-indigo">"Pain & Glory"</span> (specjalizacja deadlift), zaawansowany conjugate <span className="text-hyper-indigo">"Trinary"</span>, aż po ultralekki, ale brutalny <span className="text-hyper-indigo">"Ritual of Strength"</span>. Każdy plan jest dopracowany pod konkretny cel i poziom zaawansowania – aplikacja sama dostosowuje ciężary, objętość i rotację wariantów ćwiczeń, reagując na Twoje wyniki i zmęczenie.</>, <>From <span className="text-hyper-indigo">"From Skeleton to Threat"</span> — ideal for complete beginners, building strength and technique foundations from scratch — through the classic <span className="text-hyper-indigo">"Pain & Glory"</span> (deadlift specialization), the advanced conjugate <span className="text-hyper-indigo">"Trinary"</span>, up to the ultra-light but brutal <span className="text-hyper-indigo">"Ritual of Strength"</span>. Every plan is refined for a specific goal and experience level — the app itself adjusts weights, volume, and exercise variations rotation, reacting to your performance and fatigue.</>)}
                                </p>
                            </div>

                            <div>
                                <h3 className="font-heading text-xl font-bold uppercase text-white mb-2">
                                    {t('Inteligentna automatyzacja i pełna kontrola', 'Intelligent automation and full control')}
                                </h3>
                                <p className="font-mono text-sm text-hyper-light/70 text-balance leading-relaxed">
                                    {t('Nie musisz planować dni treningowych — aplikacja pilnuje Twoich wyników i generuje optymalną progresję. Wszystko w minimalistycznym interfejsie.', 'You don\'t need to plan your training days — the app tracks your progress and generates the optimal progression. All in a minimalist interface with thematic motifs that make training more than just a routine.')}
                                </p>
                            </div>

                            <div>
                                <h3 className="font-heading text-xl font-bold uppercase text-white mb-2">
                                    {t('Dla tych, którzy nie chcą już tracić czasu', 'For those who don\'t want to waste time anymore')}
                                </h3>
                                <p className="font-mono text-sm text-hyper-light/70 text-balance leading-relaxed">
                                    {t(<>Zero reklam, zero abonamentów. <span className="text-hyper-indigo font-bold">Hyper Planner</span> to narzędzie stworzone przez kogoś, kto zaprogramował setki treningów i wie, co działa. Zacznij trenować tak, jak powinieneś od początku.</>, <>No ads, no subscriptions, no fluff. <span className="text-hyper-indigo font-bold">Hyper Planner</span> is a tool created by someone who has been training for years and knows what real progression looks like — fast, measurable, and bullshit-free. Start training the way you always wanted.</>)}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/contact')}
                            className="mt-8 flex items-center justify-center gap-3 bg-white text-hyper-black px-8 py-4 font-heading font-bold uppercase tracking-widest text-sm hover:bg-hyper-indigo hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(67,56,202,0.8)]"
                        >
                            <span>{t('Zapytaj o dostęp do aplikacji', 'Request app access')}</span>
                            <Terminal size={18} />
                        </button>
                    </div>
                </div>

                {/* Mobile alternative view for Grid because grid doesn't always flow right when mixed */}
                <div className="md:hidden max-w-sm mx-auto px-6 flex flex-col items-center">
                    {/* similar as desktop but stacked purely */}
                    <div className="mb-8 inline-flex items-center gap-2 border border-hyper-indigo/40 bg-hyper-indigo/10 text-hyper-indigo font-mono text-xs px-3 py-1 uppercase font-bold tracking-widest">
                        HyperPlanner
                    </div>

                    <div className="flex flex-col gap-6 text-left sm:text-center mt-2">
                        <div>
                            <h3 className="font-heading text-xl font-bold uppercase text-white mb-2">
                                Your personal trainer in your pocket
                            </h3>
                            <p className="font-mono text-sm text-hyper-light/70 text-balance leading-relaxed">
                                <span className="text-hyper-indigo font-bold">HyperPlanner</span> is a modern app for planning strength and hypertrophy training, created for those who want to train smart, not blind. With precise progression algorithms, automatic deloads, and individually tailored plans, we help you achieve real strength and muscle mass gains with zero guesswork.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">
                                Programs for every level
                            </h3>
                            <p className="font-mono text-sm text-hyper-light/70 text-balance leading-relaxed">
                                From <span className="text-hyper-indigo">"From Skeleton to Threat"</span> — ideal for complete beginners, building strength and technique foundations from scratch — to the advanced conjugate <span className="text-hyper-indigo">"Trinary"</span>. Every plan is refined for a specific goal and experience level.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">
                                Intelligent automation and full control
                            </h3>
                            <p className="font-mono text-sm text-hyper-light/70 text-balance leading-relaxed">
                                You don't need to plan your training days — the app tracks your progress and generates the optimal progression.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">
                                {t('Dla tych, którzy nie chcą już tracić czasu', 'For those who don\'t want to waste time anymore')}
                            </h3>
                            <p className="font-mono text-sm text-hyper-light/70 text-balance leading-relaxed">
                                {t(<>Zero reklam, zero abonamentów. <span className="text-hyper-indigo font-bold">Hyper Planner</span> to narzędzie stworzone przez kogoś, kto zaprogramował setki treningów i wie, co działa. Zacznij trenować tak, jak powinieneś od początku.</>, <>No ads, no subscriptions. <span className="text-hyper-indigo font-bold">Hyper Planner</span> is a tool created by someone who has programmed hundreds of workouts. Start training the way you always wanted.</>)}
                            </p>
                        </div>
                    </div>

                    <div className="relative mt-8 mb-8 aspect-[9/16] w-full max-w-[280px] z-10 p-1 border border-hyper-gray/30 bg-hyper-dark rounded-[2rem] overflow-hidden group shadow-xl">
                        <img src={plans[currentPlanIndex].img} alt={plans[currentPlanIndex].name} className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all rounded-[1.75rem]" />
                        <div className="absolute top-8 left-4 bg-hyper-black/80 backdrop-blur-md border border-hyper-indigo text-white font-mono text-[10px] px-2 py-1 rounded shadow-[0_0_10px_rgba(67,56,202,0.3)] max-w-[80%] z-20">
                            <span className="text-hyper-indigo font-bold tracking-wider uppercase">{plans[currentPlanIndex].name}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('/contact')}
                        className="w-full flex items-center justify-center gap-3 bg-white text-hyper-black px-6 py-4 font-heading font-bold uppercase tracking-widest text-xs hover:bg-hyper-indigo hover:text-white transition-all"
                    >
                        <span>{t('Dostęp do Systemu', 'System App Access')}</span>
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-hyper-gray/50 py-8 bg-hyper-dark text-center font-mono text-xs text-hyper-light/40 flex flex-col items-center justify-center">
                <span>© 2026 HyperTraining - Patryk Dębowski. All rights reserved. <span className="sr-only">Personal Trainer Warszawa Praga / Gocław</span></span>
                <span className="mt-2 text-[10px] animate-pulse">End of Transmission.</span>
            </footer>
        </div>
    );
};

export default Home;
