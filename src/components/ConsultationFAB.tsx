import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ConsultationFAB = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const days = t(['PON', 'WT', 'ŚR', 'CZW', 'PT', 'SOB'], ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']);
    const times = ['08:00 - 12:00', '12:00 - 16:00', '16:00 - 21:00'];

    const toggleDay = (day: string) => {
        setSelectedDays(prev =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    const toggleTime = (time: string) => {
        setSelectedTimes(prev =>
            prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
        );
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');

        const form = e.currentTarget;
        const formData = new FormData(form);

        formData.append("Preferowane Dni", selectedDays.join(', ') || 'Nie wybrano');
        formData.append("Preferowana Godzina", selectedTimes.join(', ') || 'Nie wybrano');
        formData.append("_subject", "Nowa prośba o bezpłatną konsultację - Hypertraining");
        formData.append("_template", "table");
        formData.append("_captcha", "false");

        try {
            await fetch('https://formsubmit.co/patryk@hypertraining.works', {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });

            setFormStatus('success');
            setSelectedDays([]);
            setSelectedTimes([]);
            form.reset();
        } catch (err) {
            setFormStatus('error');
        }
    };

    return (
        <>
            {/* FAB */}
            <motion.button
                className="fixed bottom-6 right-6 z-50 bg-hyper-black/40 backdrop-blur-xl border border-hyper-indigo text-white font-heading font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-4 shadow-[0_0_20px_rgba(67,56,202,0.5)] animate-pulse hover:animate-none hover:bg-hyper-indigo/80 hover:shadow-[0_0_30px_rgba(67,56,202,0.9)] focus:outline-none flex items-center justify-center transition-all active:scale-95 group"
                onClick={() => setIsOpen(true)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
            >
                <span>{t('UMÓW BEZPŁATNĄ KONSULTACJĘ', 'BOOK FREE CONSULTATION')}</span>
            </motion.button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-hyper-black/80 backdrop-blur-xl"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            onClick={e => e.stopPropagation()}
                            className="bg-hyper-dark border border-hyper-indigo/30 rounded-2xl p-8 w-full max-w-md shadow-2xl relative"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-hyper-light hover:text-white transition-colors"
                                aria-label={t('Zamknij', 'Close')}
                            >
                                <X size={24} />
                            </button>

                            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-2 text-white">
                                {t('Bezpłatna Konsultacja', 'Free Consultation')}
                            </h3>
                            <p className="font-mono text-sm text-hyper-light/60 mb-8 border-l-2 border-hyper-indigo pl-3 py-1 bg-hyper-indigo/5">
                                {t('Protokół inicjacji wymaga weryfikacji dostępności.', 'Initiation protocol requires availability verification.')}
                            </p>

                            <AnimatePresence mode="wait">
                                {formStatus === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="py-12 flex flex-col items-center justify-center text-center border-t border-hyper-indigo/20 mt-4 h-[400px]"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-hyper-indigo/20 flex items-center justify-center mb-6">
                                            <div className="w-8 h-8 rounded-full bg-hyper-indigo animate-ping absolute" />
                                            <div className="w-8 h-8 rounded-full bg-hyper-indigo relative z-10" />
                                        </div>
                                        <h3 className="text-white font-heading text-xl md:text-2xl uppercase tracking-widest font-bold mb-4">
                                            {t('Zgłoszenie otrzymane', 'Submission Received')}
                                        </h3>
                                        <p className="font-mono text-xs md:text-sm text-hyper-light/70 max-w-xs mb-8">
                                            {t('Skontaktujemy się z tobą jak najszybciej.', 'We will contact you as soon as possible.')}
                                        </p>
                                        <button
                                            onClick={() => { setIsOpen(false); setTimeout(() => setFormStatus('idle'), 500); }}
                                            className="px-6 py-3 border border-hyper-indigo text-white font-heading text-sm uppercase tracking-widest hover:bg-hyper-indigo transition-colors"
                                        >
                                            {t('Zamknij', 'Close')}
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-6"
                                        onSubmit={handleFormSubmit}
                                    >

                                        {/* Phone Input */}
                                        <div className="space-y-2">
                                            <label className="font-mono text-xs tracking-wider text-hyper-light/80 uppercase">
                                                {t('/ 01_nr_telefonu', '/ 01_phone_number')}
                                            </label>
                                            <input
                                                type="tel"
                                                name="Telefon"
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
                                                placeholder="500 000 000"
                                                className="w-full bg-hyper-black border border-hyper-gray rounded-lg px-4 py-3 text-white font-mono placeholder:text-hyper-gray focus:outline-none focus:border-hyper-indigo focus:ring-1 focus:ring-hyper-indigo transition-all"
                                            />
                                        </div>

                                        {/* Days Multi-select */}
                                        <div className="space-y-2">
                                            <label className="font-mono text-xs tracking-wider text-hyper-light/80 uppercase">
                                                {t('/ 02_dostepnosc_dni', '/ 02_available_days')}
                                            </label>
                                            <div className="flex flex-wrap gap-2">
                                                {days.map(day => (
                                                    <button
                                                        key={day}
                                                        type="button"
                                                        onClick={() => toggleDay(day)}
                                                        className={`px-3 py-2 rounded-md font-mono text-xs font-bold transition-all ${selectedDays.includes(day)
                                                            ? 'bg-hyper-indigo text-white border-transparent shadow-[0_0_10px_rgba(67,56,202,0.5)]'
                                                            : 'bg-hyper-black border border-hyper-gray text-hyper-light/70 hover:border-hyper-indigo/50 hover:text-white'
                                                            }`}
                                                    >
                                                        {day}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Time Selection */}
                                        <div className="space-y-2">
                                            <label className="font-mono text-xs tracking-wider text-hyper-light/80 uppercase">
                                                {t('/ 03_pref_godzina', '/ 03_pref_time')}
                                            </label>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                                {times.map(time => (
                                                    <button
                                                        key={time}
                                                        type="button"
                                                        onClick={() => toggleTime(time)}
                                                        className={`px-2 py-3 rounded-md font-mono text-[10px] tracking-tighter sm:text-xs text-center transition-all ${selectedTimes.includes(time)
                                                            ? 'bg-hyper-indigo border border-hyper-indigo text-white shadow-[0_0_10px_rgba(67,56,202,0.5)]'
                                                            : 'bg-hyper-black border border-hyper-gray text-hyper-light/70 hover:border-hyper-indigo/50 hover:text-white'
                                                            }`}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting'}
                                            className={`w-full text-hyper-black mt-8 py-4 rounded-lg font-heading font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${formStatus === 'submitting' ? 'bg-white/50 cursor-not-allowed' : 'bg-white hover:bg-hyper-indigo hover:text-white'}`}
                                        >
                                            <span>{formStatus === 'submitting' ? t('Transmitowanie...', 'Transmitting...') : t('Zainicjuj Przesył Danych', 'Initiate Data Transfer')}</span>
                                            {formStatus !== 'submitting' && <Send size={18} />}
                                        </button>

                                        {formStatus === 'error' && (
                                            <div className="flex justify-center mt-2">
                                                <span className="text-[10px] items-center text-red-500 font-mono text-center flex">{t('Błąd transmisji. Spróbuj ponownie.', 'Transmission error. Try again.')}</span>
                                            </div>
                                        )}
                                        {formStatus !== 'error' && (
                                            <div className="flex justify-center mt-2">
                                                <span className="text-[10px] items-center text-hyper-light/40 font-mono text-center flex"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></div>{t('Bezpieczne połączenie z bazą', 'Secure Connection to Base')}</span>
                                            </div>
                                        )}
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ConsultationFAB;
