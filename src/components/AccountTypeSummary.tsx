import React, { useState } from 'react';
import { Box, Heading, VStack, Divider, Tooltip, IconButton, Select } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Account } from '../model/FinancialData';
import AccountDetails from './AccountDetails';

interface AccountListProps {
    accounts: Account[]; 
    title: string;
}

const AccountList: React.FC<AccountListProps> = ({ accounts, title }) => {
    const [selectedType, setSelectedType] = useState<string | 'all'>('all');

    const filteredAccounts = selectedType === 'all' ? accounts : accounts.filter(account => account.type === selectedType);

    return (
        <Box>
            <VStack spacing={4} align="start">
                <Box>
                    <Heading as="h2" size="lg" mb={4}>
                        {title}
                        <Tooltip label="Information about accounts">
                            <IconButton
                                icon={<InfoOutlineIcon />}
                                aria-label="Account Info"
                                size="sm"
                            />
                        </Tooltip>
                    </Heading>
                </Box>
                <Box>
                    <Select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        width="250px"
                        marginBottom='15px'
                    >
                        <option value="all">All Types</option>
                        <option value="Investment">Investment</option>
                        <option value="Depository">Depository</option>
                        <option value="Loan">Loan</option>
                    </Select>
                </Box>
            </VStack>
            {filteredAccounts.map((account: Account) => ( 
                <React.Fragment key={account.name}>
                    <AccountDetails account={account} />
                    <Divider borderColor="gray.300" />
                </React.Fragment>
            ))}
        </Box>
    );
};

export default AccountList;
