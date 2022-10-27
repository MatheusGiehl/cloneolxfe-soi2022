import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageArea, SearchArea } from './styled';
import { PageContainer} from '../../components/MainComponents';
import useAPI from '../../helpers/OlxAPI';
import AdItem from '../../components/AdItem'

const Page = () => {
    const api = useAPI();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getState = async () => {
            const sList = await api.getState();
            setStateList(sList);
        }
        getState();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
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
                    {categories.map((i, k) =>
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
                <hr />
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
            </PageArea>
        </PageContainer>
        </>
    )
}

export default Page