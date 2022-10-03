import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageArea, SearchArea } from './styled';
import { PageContainer, ErrorMessage } from '../../components/MainComponents';
import useAPI from '../../helpers/OlxAPI';
import AdItem from '../../components/AdItem'

const Page = () => {
    const api = useAPI();

    const [stateList, setStateList] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getState = async () => {
            const sList = await api.getStates();
            setStateList(sList);
        }
        getState();
    }, []);

    useEffect(() => {
        const getCategorias = async () => {
            const cats = await api.getCategorias();
            setCategorias(cats);
        }
        getCategorias();
    }, []);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, []);

    return (
        <>
        <SearchArea>
            <PageContainer>
                <div className="searchBox">
                    <form method="GET" action="/ads">
                        <input 
                        type="text"
                        name='q'
                        placeholder="O que você procura?"
                        />
                        <select name="state">
                            {stateList.map((i,k) =>
                            <option key={k}>
                                {i.name}
                            </option>
                            )}
                        </select>
                        <button>Pesquisar</button>
                    </form>
                </div>
                <div className="categoryList">
                    {categorias.map((i, k) =>
                    <Link
                    key={k}
                    to={`/ads/cat=${i.slug}`}
                    className="categoryItem"
                    >
                        <img src={i.img} />
                        <span>{i.name}</span>
                    </Link>
                    )}
                </div>
            </PageContainer>
        </SearchArea>
        <PageContainer>
            <PageArea>
                <h2>Anúncios Recentes</h2>
                <div className="list">
                    {adList.map((i,k) =>
                    <AdItem key={k} data={i} />
                    )}
                </div>
                <Link to="/ads" className="seeAllLink">
                    Ver todos
                </Link>
            </PageArea>
        </PageContainer>
        </>
    )
}

export default Page