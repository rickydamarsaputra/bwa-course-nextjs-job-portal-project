import { Input } from "@/components/ui/input";
import React, {FC} from "react";
import { HiSearch } from "react-icons/hi";

interface FormSearchProps{

}

const FormSearch: FC<FormSearchProps> = ({})=>{
  return(
    <div className="mt-6 bg-white p-4 shadow-sm inline-flex items-center gap-4 relative w-max z-10">
      <div className="inline-flex gap-3 items-center">
        <HiSearch className="w-6 h-6"/>
        <Input className="py-8 w-[300px] border-none" placeholder="Job Title or keyword"/>
      </div>
    </div>
  );
}

export default FormSearch;