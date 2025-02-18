import { useEffect, useState } from 'react';
import { Container, Stack } from '@mui/material';
import axios from 'axios';
import CardsProperty from './CardsProperty';
import BasicTextFields from './BasicTextFields';
import Navbar from './Navbar';

interface Property {
    id: number;
    nome: string;
    preco: number;
    localizacao: string;
    imagem: string;
}

export default function Properties() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [city, setCity] = useState<string>('');

    async function fetchProperties(selectedCity: string) {
        try {
            const response = await axios.get<Property[]>('/properties', {
                params: selectedCity ? { cidade: selectedCity } : {}
            });
            const fetchedProperties = response.data;

            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            fetchedProperties.sort((a: Property, b: Property) => {
                return favorites.includes(b.id) - favorites.includes(a.id);
            });

            setProperties(fetchedProperties);
        } catch (error) {
            console.error('Erro ao buscar as acomodações:', error);
        }
    }

    useEffect(() => {
        fetchProperties(city);
    }, [city]);

    const handleFavorite = (id: number, isFavorited: boolean) => {
        setProperties(prevProperties => {
            const updatedProperties = prevProperties.map(property =>
                property.id === id ? { ...property, isFavorited } : property
            );

            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            updatedProperties.sort((a: Property, b: Property) => {
                return favorites.includes(b.id) - favorites.includes(a.id);
            });

            return updatedProperties;
        });
    };

    return (
        <Container sx={{
            minWidth: '100%',
            height: '100%',
            backgroundColor: 'white',
            color: 'black',
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: { xs: '5rem', md: '6rem' },
            paddingBottom: '4rem',
            overflowY: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: 'lightgrey lightgrey',
        }}>
            <Navbar />
            <BasicTextFields onCityChange={setCity} />
            <Stack direction={{ xs: 'column', sm: 'row' }} paddingTop={2} alignContent={'center'} gap={2} flexWrap={'wrap'}>
                {properties.map(property => (
                    <Stack key={property.id}>
                        <CardsProperty
                            id={property.id}
                            nome={property.nome}
                            preco={property.preco}
                            loc={property.localizacao}
                            image={property.imagem}
                            onFavorite={handleFavorite}
                        />
                    </Stack>
                ))}
                {properties.length === 0 && "Não foi encontrado nenhum resultado para essa cidade."}
            </Stack>
        </Container>
    );
}
