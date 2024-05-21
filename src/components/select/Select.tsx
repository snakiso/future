import {ComponentPropsWithoutRef} from "react";

import arrowIcon from "../../assets/ArrowIcon.svg";

import * as SelectRadix from "@radix-ui/react-select";

import './select.scss'

type SelectProps = {
    data: string[]
    placeholder: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = ({
                           defaultValue,
                           onValueChange,
                           value,
                           data,
                           placeholder
                       }: SelectProps) => {
    return (
        <SelectRadix.Root
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            value={value}
        >
            <SelectRadix.Trigger className={'select'}>
                <SelectRadix.Value
                    placeholder={placeholder}
                />
                <SelectRadix.Icon className={'select__arrow'}>
                    <img src={arrowIcon} alt=""/>
                </SelectRadix.Icon>
            </SelectRadix.Trigger>
            <SelectRadix.Portal >
                <SelectRadix.Content className={'select__content'} position={"popper"}>
                    <SelectRadix.Viewport asChild>
                        <SelectRadix.Group>
                            {data.map((el, i) => {
                                return (
                                    <SelectRadix.Item className={'select__item'} key={i} value={el}>
                                        <SelectRadix.ItemText>
                                            {el}
                                        </SelectRadix.ItemText>
                                    </SelectRadix.Item>
                                )
                            })}
                        </SelectRadix.Group>
                    </SelectRadix.Viewport>
                </SelectRadix.Content>
            </SelectRadix.Portal>
        </SelectRadix.Root>
    );
};