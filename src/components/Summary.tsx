import React from 'react';
import { Box, Stat, StatLabel, StatNumber, StatGroup, Tooltip, Text, Icon } from '@chakra-ui/react';
import { InstitutionData } from '../model/FinancialData';
import { InfoIcon } from '@chakra-ui/icons';

interface SummaryProps {
    institutionData: InstitutionData;
}

const calculateTotals = (institutionData: InstitutionData) => {
    let totalAssets = 0;
    let totalLiabilities = 0;

    Object.values(institutionData.assets).forEach(account => {
        totalAssets += account.balance.current;
    });

    Object.values(institutionData.liabilities).forEach(account => {
        totalLiabilities += account.balance.current;
    });

    return { totalAssets, totalLiabilities };
};

const Summary: React.FC<SummaryProps> = ({ institutionData }) => {
    const { totalAssets, totalLiabilities } = calculateTotals(institutionData);

    return (
        <Box mb={5} mx={4} textAlign="center"> 
            <StatGroup>
                <Stat>
                    <StatLabel>
                        Total Assets
                        <Tooltip label="Total value of assets" placement="top">
                            <Icon as={InfoIcon} ml={1} color="gray.500" />
                        </Tooltip>
                    </StatLabel>
                    <StatNumber>${totalAssets.toFixed(2)}</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel>
                        Total Liabilities
                        <Tooltip label="Total value of liabilities" placement="top">
                            <Icon as={InfoIcon} ml={1} color="gray.500" />
                        </Tooltip>
                    </StatLabel>
                    <StatNumber>${totalLiabilities.toFixed(2)}</StatNumber>
                </Stat>
            </StatGroup>
        </Box>
    );
};

export default Summary;
