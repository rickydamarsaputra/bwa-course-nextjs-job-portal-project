import { Input } from "@/components/ui/input";
import React, {FC} from "react";
import { HiSearch, HiLocationMarker } from "react-icons/hi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FormSearchProps{

}

const FormSearch: FC<FormSearchProps> = ({})=>{
  return(
    <>
      <div className="mt-6 p-4 bg-white shadow-md inline-flex items-center gap-4 relative w-max z-10">
        <div className="inline-flex gap-3 items-center">
          <HiSearch className="w-6 h-6"/>
          <Input className="py-8 w-[300px] border-none" placeholder="Job Title or keyword"/>
        </div>
        <div className="inline-flex gap-3 items-center">
          <HiLocationMarker className="w-6 h-6"/>
          <Select>
            <SelectTrigger className="w-[300px] border-none text-gray-500 outline-none py-8">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="py-8 px-10 text-lg">
            Search my job
          </Button>
        </div>
      </div>
      <div>
        <div className="text-muted-foreground mt-4">
          Popular : UI Designer, UX Researcher, Android, Admin
        </div>
      </div>
    </>
  );
}

export default FormSearch;