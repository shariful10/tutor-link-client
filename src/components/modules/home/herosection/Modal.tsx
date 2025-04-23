import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const Modal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative flex justify-start uppercase text-lg mt-6" >
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 0, 0.6], 
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="absolute w-32 h-32 border-4 border-teal-400 rounded-full opacity-50"
            />

            {/* Main Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-700 rounded-full shadow-lg"
            >
              🔎 Apply Filter →
            </motion.button>
          </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl text-gray-600">
              
              Search Tutor
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 w-full">
            <Select>
              <SelectTrigger className="border-2 border-gray-500 text-black w-full">
                <SelectValue placeholder="Select Districk" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-2 mt-3 border-gray-500 text-black w-full">
                <SelectValue placeholder="Select Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-2 mt-3 border-gray-500 text-black w-full">
                <SelectValue placeholder="Select Medium" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Link href="/findTutors"><Button type="submit" className="bg-orange-400 w-full">
              Search Tutor
            </Button></Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
