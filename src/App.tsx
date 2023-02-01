import { Box } from '@mui/material';
import Footer from './components/footer';
import Header from './components/header';
import MainRoute from './routes/MainRoute';

function App() {
    return (
        <Box>
            <Header />
            <MainRoute />
            <Footer />
        </Box>
    );
}

export default App;
