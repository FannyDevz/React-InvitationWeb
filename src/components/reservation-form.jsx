import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

function ReservationForm() {
  return (
    <div className="container mx-auto px-4 py-6">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
        viewport={{ once: true }}
        className="text-center text-sm text-primary font-medium mt-6"
      >
        Your presence shall be a great honor for us and our families. Please confirm your attendance through the reservation form below:
      </motion.p>
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 170, damping: 30 }}
        viewport={{ once: true }}
        className="bg-secondary p-6 rounded-2xl mt-8 space-y-4"
      >
        <input type="text" placeholder="Name" className="form-control" />
        <textarea placeholder="Address" className={cn("form-control", "min-h-[80px]")}></textarea>
        <div className="space-y-1">
          <label htmlFor="attend" className="inline-block text-sm text-primary font-medium">
            Will you attend the wedding?
          </label>
          <select id="attend" className="form-control">
            <option value="YA">Yes, I will gladly attend</option>
            <option value="TIDAK">No, I can&apos;t attend the wedding</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="guest-count" className="inline-block text-sm text-primary font-medium">
            How many guests will be attend?
          </label>
          <select id="guest-count" className="form-control">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <button className="h-10 px-3 py-2 rounded-md flex items-center justify-center bg-transparent text-primary text-sm font-medium border-2 border-primary hover:bg-white transition duration-200 mx-auto">
          <Send className="w-4 h-4 mr-2" />
          <span>Submit Confirmation</span>
        </button>
      </motion.form>
    </div>
  );
}

export default ReservationForm;
