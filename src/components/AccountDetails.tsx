import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Account } from '../model/FinancialData';

interface AccountDetailsProps {
    account: Account;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({ account }) => {
    return (
        <Box border="1px" borderColor="gray.200" p={4} mb={2} borderRadius="md">
            <Text fontWeight="bold">{account.name}</Text>
            <Text>Balance: ${account.balance.current.toFixed(2)}</Text>
            <Text>Type: {account.type}</Text>
            <Text>Subtype: {account.subtype}</Text>
        </Box>
    );
};

export default AccountDetails;
