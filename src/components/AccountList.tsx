import React, { useState, useMemo } from 'react';
import { Box, VStack, Text, Button, HStack, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Account } from '../model/FinancialData';

interface AccountListProps {
    accounts: Account[];
    title: string;
}

const AccountList: React.FC<AccountListProps> = ({ accounts, title }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [sortColumn, setSortColumn] = useState<keyof Account | 'balanceCurrent'>('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const itemsPerPage = 10;

    const sortedAccounts = useMemo(() => {
        return [...accounts].sort((a, b) => {
            let aValue = sortColumn === 'balanceCurrent' ? a.balance.current : a[sortColumn];
            let bValue = sortColumn === 'balanceCurrent' ? b.balance.current : b[sortColumn];

            aValue = aValue ?? "";
            bValue = bValue ?? "";

            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }, [accounts, sortColumn, sortDirection]);

    const handleSort = (column: keyof Account | 'balanceCurrent') => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const paginatedAccounts = sortedAccounts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handleNextPage = () => setCurrentPage(currentPage + 1);
    const handlePreviousPage = () => setCurrentPage(currentPage - 1);

    return (
        <VStack align="stretch" spacing={4}>
            <Text fontSize="xl" fontWeight="bold" textAlign="center" bg="white">{title}</Text>

            <Box overflowY="auto" maxHeight="500px" bg="white">
                <Table variant="simple">
                    <Thead bg="white">
                        <Tr>
                            <Th cursor="pointer" onClick={() => handleSort('name')}>Name</Th>
                            <Th cursor="pointer" onClick={() => handleSort('balanceCurrent')}>Balance</Th>
                            <Th cursor="pointer" onClick={() => handleSort('type')}>Type</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {paginatedAccounts.map(account => (
                            <Tr key={account.name}>
                                <Td>{account.name}</Td>
                                <Td>${account.balance.current}</Td>
                                <Td>{account.type}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>

            <HStack justifyContent="center" spacing={4} bg="white">
                <Button onClick={handlePreviousPage} disabled={currentPage === 0} leftIcon={<FiArrowLeft />}>Previous</Button>
                <Button onClick={handleNextPage} disabled={(currentPage + 1) * itemsPerPage >= accounts.length} rightIcon={<FiArrowRight />}>Next</Button>
            </HStack>
        </VStack>
    );
};

export default AccountList;
