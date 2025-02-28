import { Flex } from "@chakra-ui/react";
import { NavigationContainer, NavItem } from '@keystone-6/core/admin-ui/components';
import type { ListMeta } from '@keystone-6/core/types';
import { useRouter } from 'next/router';
import React from "react";
import { BiCategoryAlt } from 'react-icons/bi';
import { CgTemplate } from "react-icons/cg";
import { HiOutlineUserGroup } from 'react-icons/hi';
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdOutlineDashboard, } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { IoBusinessOutline } from "react-icons/io5";

const getIconForLabel = (label: string) => {
    switch (label) {
        case "Users": return <HiOutlineUserGroup size={24} />
        case "Agencies": return <IoBusinessOutline size={24} />
        case "Cars": return <IoCarSportOutline size={24} />
        case "Invoices": return <LiaFileInvoiceDollarSolid size={24} />


    }

}

export const ListNavItem = ({ list }: { list: ListMeta }) => {
    const router = useRouter();
    return (
        <NavItem
            isSelected={router.pathname.split('/')[1] === `/${list.path}`.split('/')[1]}
            href={`/${list.path}${list.isSingleton ? '/1' : ''}`}
        >
            <Flex align="center" >
                <Flex align="center" justify="center">
                    {getIconForLabel(list.label)}
                </Flex>
                <Flex w={10}></Flex>
                <Flex align="center" justify="center">

                    {list.label}
                </Flex>
            </Flex>
        </NavItem>
    );
};

export const ListNavItems = ({ lists = [], include = [] }: { lists: ListMeta[], include?: string[] }) => {

    const renderedList = include.length > 0 ? lists.filter((i: { key: any; }) => include.includes(i.key)) : lists;

    return (
        <>
            <NavItem href={"/"}>
                <Flex align="center" >
                    <Flex align="center" justify="center">
                        <MdOutlineDashboard size={24} />
                    </Flex>
                    <Flex w={10}></Flex>
                    <Flex align="center" justify="center">

                        Dashboard
                    </Flex>
                </Flex>
            </NavItem>


            {renderedList.map((list: ListMeta) => {
                return <ListNavItem key={list.key} list={list} />;
            })}
        </>
    );
};

const CustomNavigation = ({ lists }: { lists: ListMeta[] }) => (
    <NavigationContainer >
        <ListNavItems lists={lists} />
    </NavigationContainer>
)

export default CustomNavigation
