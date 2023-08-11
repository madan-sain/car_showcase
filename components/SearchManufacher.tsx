"use client";
import { manufacturers } from "@/constants";
import { SearcMaunfacherprops } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useState, Fragment } from "react";

const SearchManufacher = ({
  maunfacher,
  setmaunfacher,
}: SearcMaunfacherprops) => {
  const [quray, setquray] = useState("");
  const filtersManufacturers =
    quray === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(quray.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(maunfacher: string) => maunfacher}
            onChange={(e) => setquray(e.target.value)}
          />
          <Transition
            show={quray !== ""}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setquray("")}
          >
            <div>{/* Content within the transition */}</div>
          </Transition>

          <Combobox.Options>
            {filtersManufacturers.map((item) => (
              <Combobox.Option
                key={item}
                className={({ active }) =>
                  `relative search-manufacturer__option ${
                    active ? "bg-primary-blue text-white" : "text-gray-900"
                  }`
                }
                value={item}
              >
                {item}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacher;
