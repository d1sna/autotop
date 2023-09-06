import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface SelectAutocompleteValue {
  id: number;
  name: string;
}

interface SelectAutocompleteProps {
  defaultValue: string;
  className?: string;
  values: SelectAutocompleteValue[];
}

export default function SelectAutocomplete({
  defaultValue = "test",
  className = "",
  values = [],
}: SelectAutocompleteProps) {
  const valuesWithDefault = [{ id: -1, name: defaultValue }, ...values];

  const [selected, setSelected] = useState(valuesWithDefault[0]);
  const [query, setQuery] = useState("");

  const filteredValuesWithDefault =
    query === ""
      ? valuesWithDefault
      : valuesWithDefault.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className={className}>
      <Combobox
        value={selected}
        onChange={(value) => {
          setSelected(value);
        }}
      >
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-md bg-white text-left shadow-md sm:text-sm">
            <Combobox.Input
              className={`w-full border-none py-2 pl-3 pr-10 text-sm leading-5 ${
                selected.name === valuesWithDefault[0].name
                  ? "text-slate-400"
                  : "text-black"
              }`}
              displayValue={(person: any) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />

            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-40">
              {filteredValuesWithDefault.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredValuesWithDefault
                  .filter((v) => v.id !== -1)
                  .map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-red-400 text-white" : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-red-400"
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
