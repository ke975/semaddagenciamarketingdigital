import { useEffect, useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = () => {
    const url = `https://wa.me/50581646729?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
    setMessage("");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Chat popup */}
          {isOpen && (
            <div className="fixed bottom-24 right-6 w-72 bg-white shadow-xl rounded-lg p-4 z-50">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-gray-800">Chatea con nosotros</p>
                <button onClick={() => setIsOpen(false)}>
                  <FaTimes className="text-gray-500 hover:text-red-500" />
                </button>
              </div>
              <textarea
                className="w-full h-24 border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                placeholder="Escribe tu mensaje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={sendMessage}
                className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white rounded py-2 font-semibold transition duration-200"
                disabled={!message.trim()}
              >
                Enviar por WhatsApp
              </button>
            </div>
          )}

          {/* Floating button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl flex items-center justify-center transition-transform duration-300 hover:scale-110 animate-bounce focus:outline-none"
            aria-label="Chatea con nosotros por WhatsApp"
          >
            <FaWhatsapp size={30} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
