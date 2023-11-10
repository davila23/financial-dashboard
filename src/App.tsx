import { useState, useEffect } from 'react';
import { ChakraProvider, Flex, Box, VStack, Heading, Button, Spacer, Spinner, Grid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import LoginPage from './components/LoginPage';
import AccountList from './components/AccountList';
import BarChart from './components/charts/BarChart';
import PieChart from './components/charts/PieChart';
import StackedBarChart from './components/charts/StackedBarChart';
import DonutChart from './components/charts/DonutChart';
import AccountTypeSummary from './components/AccountTypeSummary';
import Sidebar from './components/Sidebar';
import Summary from './components/Summary';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showWelcomeModal, setShowWelcomeModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Dashboard');
    const financialData = useSelector((state: RootState) => state.financial.data);
    const username = "user-demo@gmail.com"; 

    useEffect(() => {
        if (isLoggedIn) {
            setShowWelcomeModal(true);
        }
    }, [isLoggedIn]);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000); 
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const renderWelcomeModal = () => {
        return (
            <Modal isOpen={showWelcomeModal} onClose={() => setShowWelcomeModal(false)} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Welcome to the Financial Dashboard 📊</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>Hello, {username}! This dashboard helps you track your financial assets and liabilities.</p>
                    </ModalBody>
                </ModalContent>
            </Modal>
        );
    };

    if (!isLoggedIn) {
        return (
            <ChakraProvider>
                <Flex align='center' justify='center' h='100vh'>
                    <LoginPage onLogin={handleLogin} />
                </Flex>
            </ChakraProvider>
        );
    }

    if (isLoading) {
        return (
            <ChakraProvider>
                <Flex align='center' justify='center' h='100vh'>
                    <Spinner size='xl' />
                </Flex>
            </ChakraProvider>
        );
    }

    const renderContent = () => {
        const institutionData = financialData["account-test"];
        const accountsArray = Object.values(institutionData.assets).concat(Object.values(institutionData.liabilities));

        switch (selectedCategory) {
            case 'Assets':
              return <AccountTypeSummary accounts={Object.values(institutionData.assets)} title="Liabilities" />;
            case 'Liabilities':
              return <AccountTypeSummary accounts={Object.values(institutionData.liabilities)} title="Liabilities" />;
            case 'Dashboard':
            default:
                return (
                  <Flex h="full" p={4} bg="gray.100">
                  <VStack flex={7} bg="white" p={4} borderRadius="lg" boxShadow="md">
                      <Heading size="md" mb={4}>Financial Analysis</Heading>
                      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                          <Box bg="white" borderRadius="lg" p={2} boxShadow="sm">
                              <BarChart data={accountsArray} width={270} height={300} />
                          </Box>
                          <Box bg="white" borderRadius="lg" p={2} boxShadow="sm">
                              <PieChart data={accountsArray} width={300} height={300} />
                          </Box>
                          <Box bg="white" borderRadius="lg" p={2} boxShadow="sm">
                              <StackedBarChart data={accountsArray} width={200} height={300} />
                          </Box>
                          <Box bg="white" borderRadius="lg" p={2} boxShadow="sm">
                              <DonutChart data={accountsArray} width={300} height={300} />
                          </Box>
                      </Grid>
                  </VStack>
                  <Spacer />
                  <VStack flex={3} bg="white" p={4} borderRadius="lg" boxShadow="md">
                      <AccountList accounts={accountsArray} title="Transactions" />
                  </VStack>
              </Flex>
                );
        }
    };

    return (
      <ChakraProvider>
            <Flex direction="column" h="100vh">
                <Box p={4} bg="gray.200" display="flex" justifyContent="flex-end" alignItems="center">
                    <Text mr={3}>Welcome, {username}</Text>
                    <Button leftIcon={<FiLogOut />} onClick={handleLogout}>Sign Out</Button>
                </Box>
                <Flex flex="1">
                    <Sidebar
                        selectedCategory={selectedCategory}
                        onSelectCategory={handleSelectCategory}
                    />
                    <Box flex="1" p={4}>
                      <Summary institutionData={financialData["account-test"]} />
                        {renderContent()}
                    </Box>
                </Flex>
            </Flex>
            {renderWelcomeModal()}
        </ChakraProvider>
    );
}

export default App;

