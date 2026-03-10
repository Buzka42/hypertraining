import { Terminal, Send, MapPin, Phone, Mail, Camera, X } from 'lucide-react';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
    '/gallery/gym1.jpg',
    '/gallery/gym2.jpg',
    '/gallery/gym3.jpg',
    '/gallery/gym4.jpg',
    '/gallery/gym5.jpg',
    '/gallery/gym6.jpg',
    '/gallery/gym7.jpg'
];

const Contact = () => {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("_subject", "Nowa wiadomość z formularza - Hypertraining");
        formData.append("_template", "table");
        formData.append("_captcha", "false");

        try {
            await fetch('https://formsubmit.co/patryk@hypertraining.works', {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });

            setFormStatus('success');
            form.reset();
        } catch (err) {
            setFormStatus('error');
        }
    };

    return (
        <div className="bg-hyper-black min-h-screen pt-32 pb-24 text-white relative">
            <div className="absolute inset-0 grid-bg opacity-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <header className="mb-16">
                    <div className="inline-flex items-center gap-2 border border-hyper-indigo/40 bg-hyper-indigo/10 text-hyper-indigo font-mono text-xs px-3 py-1 uppercase font-bold tracking-widest mb-4">
                        <Terminal size={14} /> {t('Link Komunikacyjny', 'Communication Link')}
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
                        {t(<>Nawiąż <span className="text-hyper-indigo">Połączenie</span></>, <>Establish <span className="text-hyper-indigo">Connection</span></>)}
                    </h1>
                    <p className="font-mono text-sm text-hyper-light/70 max-w-2xl border-l border-hyper-indigo pl-4">
                        {t(<>Czas na domysły się skończył. Prześlij parametry startowe i zainicjuj procedurę transformacji.<span className="sr-only"> Trener Personalny Gocław.</span></>, <>The time for guesswork is over. Transmit your starting parameters and initiate the transformation procedure. <span className="sr-only">Personal Trainer Warszawa Praga</span></>)}
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Terminal Form */}
                    <div className="relative p-1 bg-gradient-to-br from-hyper-indigo/30 via-hyper-gray/40 to-hyper-black rounded-[0.5rem] h-fit">
                        <div className="bg-hyper-dark rounded-sm p-8 h-full shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] border border-hyper-gray/50 relative">
                            <div className="absolute top-0 left-0 w-full h-8 bg-black/40 border-b border-hyper-gray/50 flex items-center px-4 gap-2 rounded-t-sm">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                <span className="font-mono text-[10px] text-hyper-light/50 ml-4 tracking-widest">root@hypertraining:~# ./init_link.sh</span>
                            </div>

                            <AnimatePresence mode="wait">
                                {formStatus === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="py-16 md:py-24 flex flex-col items-center justify-center text-center border-t border-hyper-indigo/20 mt-8 h-[400px]"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-hyper-indigo/20 flex items-center justify-center mb-6">
                                            <div className="w-8 h-8 rounded-full bg-hyper-indigo animate-ping absolute" />
                                            <div className="w-8 h-8 rounded-full bg-hyper-indigo relative z-10" />
                                        </div>
                                        <h3 className="text-white font-heading text-2xl uppercase tracking-widest font-bold mb-4">
                                            {t('Zgłoszenie otrzymane', 'Submission Received')}
                                        </h3>
                                        <p className="font-mono text-sm text-hyper-light/70 max-w-xs mb-8">
                                            {t('Skontaktujemy się z tobą jak najszybciej.', 'We will contact you as soon as possible.')}
                                        </p>
                                        <button
                                            onClick={() => setFormStatus('idle')}
                                            className="px-6 py-3 border border-hyper-indigo text-white font-heading text-sm uppercase tracking-widest hover:bg-hyper-indigo transition-colors"
                                        >
                                            {t('Nowa Wiadomość', 'New Message')}
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleFormSubmit}
                                        className="mt-8 space-y-6"
                                    >

                                        <div className="space-y-2 group">
                                            <label className="font-mono text-xs text-hyper-indigo uppercase tracking-wider block transition-colors">
                                                $ sys.input_name
                                            </label>
                                            <input
                                                type="text"
                                                name="Imię / Pseudonim"
                                                required
                                                placeholder={t('Wpisz imię / pseudonim', 'Enter name / alias')}
                                                className="w-full bg-transparent border-b border-hyper-gray/80 px-2 py-3 text-white font-mono text-sm placeholder:text-hyper-light/20 focus:outline-none focus:border-hyper-indigo focus:bg-hyper-indigo/5 transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2 group">
                                            <label className="font-mono text-xs text-hyper-indigo uppercase tracking-wider block transition-colors">
                                                $ sys.input_contact
                                            </label>
                                            <input
                                                type="text"
                                                name="Kontakt (Email / Telefon)"
                                                required
                                                onChange={(e) => {
                                                    const val = e.target.value;
                                                    if (val === '' || !/^[0-9+\s]+$/.test(val)) return;
                                                    let hasPlus = val.startsWith('+');
                                                    let numbers = val.replace(/\D/g, '');
                                                    let prefix = '';
                                                    if (hasPlus && numbers.length >= 2) {
                                                        prefix = '+' + numbers.substring(0, 2) + ' ';
                                                        numbers = numbers.substring(2);
                                                    } else if (hasPlus) {
                                                        prefix = '+' + numbers;
                                                        numbers = '';
                                                    }
                                                    let res = '';
                                                    for (let i = 0; i < numbers.length; i++) {
                                                        if (i > 0 && i % 3 === 0) res += ' ';
                                                        res += numbers[i];
                                                    }
                                                    e.target.value = (prefix + res.trim()).substring(0, 16);
                                                }}
                                                placeholder={t('Telefon / Email', 'Phone / Email')}
                                                className="w-full bg-transparent border-b border-hyper-gray/80 px-2 py-3 text-white font-mono text-sm placeholder:text-hyper-light/20 focus:outline-none focus:border-hyper-indigo focus:bg-hyper-indigo/5 transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2 group">
                                            <label className="font-mono text-xs text-hyper-indigo uppercase tracking-wider block transition-colors">
                                                $ sys.input_objective
                                            </label>
                                            <textarea
                                                name="Wiadomość / Cel"
                                                required
                                                rows={4}
                                                placeholder={t('Opisz cel operacji (np. trójbój siłowy, hipertrofia, ból pleców)', 'Describe mission objective (e.g. powerlifting, hypertrophy, back pain)')}
                                                className="w-full bg-transparent border-b border-hyper-gray/80 px-2 py-3 text-white font-mono text-sm placeholder:text-hyper-light/20 focus:outline-none focus:border-hyper-indigo focus:bg-hyper-indigo/5 transition-all resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting'}
                                            className={`w-full text-white mt-8 py-5 font-heading font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 group ${formStatus === 'submitting' ? 'bg-hyper-indigo/50 cursor-not-allowed' : 'bg-hyper-indigo hover:bg-white hover:text-hyper-black'}`}
                                        >
                                            <span>{formStatus === 'submitting' ? t('Transmitowanie...', 'Transmitting...') : t('Transmituj Dane', 'Transmit Data')}</span>
                                            {formStatus !== 'submitting' && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                                        </button>

                                        {formStatus === 'error' && (
                                            <div className="flex justify-center mt-2">
                                                <span className="text-[10px] items-center text-red-500 font-mono text-center flex">{t('Błąd transmisji. Spróbuj ponownie.', 'Transmission error. Try again.')}</span>
                                            </div>
                                        )}
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Column: Info & Map & Gallery */}
                    <div className="space-y-12">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-sm">
                            {/* Location Card */}
                            <div className="border border-hyper-gray/50 bg-hyper-dark p-6 flex flex-col items-start gap-4 hover:border-hyper-indigo/50 transition-colors shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-hyper-indigo/5 rounded-bl-[100%] transition-transform group-hover:scale-150" />
                                <MapPin className="text-hyper-indigo relative z-10" size={24} />
                                <div className="w-full relative z-10">
                                    <h4 className="flex items-center gap-2 text-hyper-indigo uppercase tracking-widest text-[10px] mb-3 border-b border-hyper-gray/30 pb-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-hyper-indigo animate-[pulse_2s_ease-in-out_infinite]"></span>
                                        Geo_Coordinates
                                    </h4>
                                    <p className="text-white font-heading text-xl font-bold uppercase tracking-wide mb-4">Well Fitness Gocław</p>

                                    <div className="text-[11px] text-hyper-light/70 space-y-3">
                                        <div className="flex gap-3">
                                            <span className="text-hyper-indigo opacity-50 shrink-0 mt-0.5">HUB:</span>
                                            <span className="text-white">Centrum Handlowe GOCŁAW</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <span className="text-hyper-indigo opacity-50 shrink-0 mt-0.5">LOC:</span>
                                            <span className="leading-relaxed">
                                                ul. gen. Augusta Emila Fieldorfa „Nila” 41<br />
                                                04-125 Warszawa<span className="sr-only"> Praga Południe Warszawa Praga</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comms Card */}
                            <div className="border border-hyper-gray/50 bg-hyper-dark p-6 flex flex-col items-start gap-4 hover:border-hyper-indigo/50 transition-colors shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-hyper-indigo/5 rounded-bl-[100%] transition-transform group-hover:scale-150" />
                                <Phone className="text-hyper-indigo relative z-10" size={24} />
                                <div className="w-full relative z-10">
                                    <h4 className="flex items-center gap-2 text-hyper-indigo uppercase tracking-widest text-[10px] mb-3 border-b border-hyper-gray/30 pb-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-hyper-indigo animate-[pulse_2s_ease-in-out_infinite]"></span>
                                        Comms_Link
                                    </h4>
                                    <p className="text-white font-heading text-xl font-bold tracking-wide mb-4">+48 509 519 866</p>

                                    <div className="text-[11px] text-hyper-light/70 space-y-3">
                                        <div className="flex gap-3 items-center group/email cursor-pointer transition-colors">
                                            <span className="text-hyper-indigo opacity-50 shrink-0">MSG:</span>
                                            <div className="flex items-center gap-2 text-white group-hover/email:text-hyper-indigo transition-colors">
                                                <Mail size={12} className="text-hyper-indigo" />
                                                <span>patryk@hypertraining.works</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <span className="text-hyper-indigo opacity-50 shrink-0">NET:</span>
                                            <span className="text-white">Active / Encrypted</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Map Placeholder (Dark Mode styled) */}
                        <div className="relative w-full h-64 border border-hyper-gray/50 bg-hyper-dark overflow-hidden group">
                            <iframe
                                src="https://maps.google.com/maps?q=gen.+Augusta+Emila+Fieldorfa+41,+04-125+Warszawa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="absolute inset-0 w-full h-full opacity-60 grayscale mix-blend-screen group-hover:opacity-80 transition-opacity duration-500"
                                style={{ filter: 'invert(90%) hue-rotate(180deg) contrast(150%)' }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <div className="absolute inset-0 pointer-events-none bg-hyper-indigo/10 mix-blend-multiply" />
                        </div>

                        {/* CSS Grid Photo Gallery */}
                        <div>
                            <div className="inline-flex items-center gap-2 border border-hyper-indigo/40 bg-hyper-indigo/10 text-hyper-indigo font-mono text-xs px-3 py-1 uppercase font-bold tracking-widest mb-6">
                                <Camera size={14} /> Base
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 h-auto">
                                <div
                                    className="col-span-2 row-span-2 relative group overflow-hidden border border-hyper-gray/30 bg-hyper-dark cursor-pointer"
                                    onClick={() => setSelectedImage(galleryImages[0])}
                                >
                                    <img src={galleryImages[0]} alt="Well Fitness Gocław - Personal Trainer Warszawa Praga" className="w-full h-full object-cover min-h-[200px] grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                                    <div className="absolute inset-0 bg-hyper-indigo/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
                                </div>
                                {galleryImages.slice(1, 5).map((img, i) => (
                                    <div
                                        key={i}
                                        className="relative group overflow-hidden border border-hyper-gray/30 bg-hyper-dark aspect-square cursor-pointer"
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img src={img} alt={`Training in Warszawa Praga ${i + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" />
                                        <div className="absolute inset-0 bg-hyper-indigo/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Fullscreen Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 bg-hyper-black/40 backdrop-blur-md border border-hyper-gray text-hyper-light hover:text-white hover:border-hyper-indigo transition-all rounded-full z-[110]"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            src={selectedImage}
                            alt="Fullscreen view"
                            className="max-w-[95vw] max-h-[95vh] object-contain border border-hyper-gray/30 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Contact;
