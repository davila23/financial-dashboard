import React from 'react';
import { VStack, Heading, Button, Divider, Flex } from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

interface SidebarProps {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onSelectCategory }) => {
    return (
        <Flex
            bg="gray.100"
            p={4}
            width="250px"
            height="800px"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between" 
        >
            <VStack spacing={4} align="center"> 
                <Heading size="lg">Menu:</Heading>
                <Divider width="80%" borderColor="gray.300" /> 
                <Button leftIcon={<FiHome />} onClick={() => onSelectCategory('Dashboard')} isActive={selectedCategory === 'Dashboard'}>Dashboard</Button>
                <Button leftIcon={<FiTrendingUp />} onClick={() => onSelectCategory('Assets')} isActive={selectedCategory === 'Assets'}>Assets</Button>
                <Button leftIcon={<FiTrendingDown />} onClick={() => onSelectCategory('Liabilities')} isActive={selectedCategory === 'Liabilities'}>Liabilities</Button>
            </VStack>
        </Flex>
    );
};

export default Sidebar;
