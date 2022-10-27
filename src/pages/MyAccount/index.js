import React, { useState, useEffect, useRef } from 'react';
import { PageArea, ModalAll } from './styled';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import useAPI from '../../helpers/OlxAPI';
import MaskedInput from 'react-text-mask';
import { createNumberMask } from 'text-mask-addons';
import { Slide } from 'react-slideshow-image'
import "react-slideshow-image/dist/styles.css";


const Page = () => {
    const api = useAPI();

    const [name, setName] =useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [stateList, setStateList] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates()
            setStateList(sList);
        }
        getStates();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        if (password !== confirmPassword) {
            setError("Senhas não batem");
            setDisabled(false)
            return;
        }

        const json = await api.register(
            name,
            stateLoc,
            email,
            password
        );
        if (json.error) {
            setError(json.error)
        } else {
            doLogin(json.token)
            window.location.href = '/'
        }
        setDisabled(false);
    }

    return (
        <PageContainer>
            <PageTitle>
                Minha Conta
            </PageTitle>
            <PageArea>
                {error &&
                  <ErrorMessage>
                    {error}
                  </ErrorMessage>
                }
                <div className='pageTop'>
                    <div className='pageTopLeft'>
                        <div className='imgProfile'>
                            <img src='https://i1.sndcdn.com/avatars-000205498235-o6x5yu-t500x500.jpg' alt='profile'/>
                        </div>
                        <div className='infoProfile'>
                            <h1>
                                {user && 
                                  user.name
                                }
                            </h1>
                            <p>
                                {user &&
                                  user.email
                                }
                            </p>
                        </div>
                        <div className='pageTopRight'>
                            <form onSubmit={handleSubmit} className='formRight'>
                            <label 
                    className='area'
                    >
                        <div 
                        className='area--title'
                        >
                            Nome Completo
                        </div>
                        <div 
                        className='area--input'
                        >
                            <input
                            type="text"
                            disabled = {disabled}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            />
                        </div>
                        </label>
                        <label 
                    className='area'
                    >
                        <div 
                        className='area--title'
                        >
                            Estado
                        </div>
                        <div 
                        className='area--input'
                        >
                            <select
                            required
                            disabled={disabled}
                            value={stateLoc}
                            onChange={e => setStateUser(e.target.value)}
                            >
                                <option></option>
                                    {stateList.map((state,index) => 
                                    <option
                                    key={index}
                                    value={state.id}
                                    >
                                        {state.name}
                                    </option>
                                    )}
                            </select>
                        </div>
                    </label>
                    <label 
                    className='area'
                    >
                        <div 
                        className='area--title'
                        >
                            E-mail
                        </div>
                        <div 
                        className='area--input'
                        >
                            <input
                            type="email"
                            disabled = {disabled}
                            value={email}
                            onChange={e => setEmailUser(e.target.value)}
                            required
                            />
                        </div>
                    </label>
                    <label 
                    className='area'
                    >
                        <div 
                        className='area--title'
                        >
                            Nova Senha
                        </div>
                        <div 
                        className='area--input'
                        >
                            <input
                            type="password"
                            disabled = {disabled}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                            <span>Para manter a senha atual, deixe vazio</span>
                        </div>
                    </label>
                    <label 
                    className='area'
                    >
                        <div 
                        className='area--title'
                        >
                            
                        </div>
                        <div 
                        className='area--input'
                        >
                            <button
                            disabled = {disabled}
                            >
                                Atualizar
                            </button>
                        </div>
                    </label>
                            </form>
                        </div>
                    </div>
                </div>
                <PageTitle>
                    Meus Anúncios
                </PageTitle>
                <div className='pageBottom'>
                    {adsList &&
                    <Slide {...settings}>
                    {adsList.map((ad, index) => 
                       <div key={index} onClick={() => openModal(ad)}>
                        <AdItem key={index} data={ad} />
                       </div>   
                    )}
                    </Slide>
                    }
                    </div>
            </PageArea>

            {visibleModal && 
            <Modal
              title={adTitleModal}
              visibleModal={visibleModal}
              setVisibleModal={setVisibleModal}
            >
                <ModalAll>
                    <form 
                    onSubmit={handleSubmitModal}

                    >
                        <div className='modalContent'>
                        <label 
                    className='area'
                    >
                        <div 
                        className='area--title'
                        >
                            Título
                        </div>
                        <div 
                        className='area--input'
                        >
                            <input
                            type="text"
                            disabled = {disabled}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                            />
                        </div>
                    </label>
                    <label 
                    className='area'
                    >
                        <div 
                        className='area--title'
                        >
                            Categoria
                        </div>
                        <div 
                        className='area--input'
                        >
                            <select
                            required
                            disabled={disabled}
                            onChange={e => setCategory(e.target.value)}
                            >
                                <option></option>
                                    {categories && categories.map((catego) => 
                                    <option
                                    key={catego._id}
                                    value={catego._id}
                                    >
                                        {catego.name}
                                    </option>
                                    )}
                            </select>
                        </div>
                    </label>
                    <label 
                    className='area'
                    >
                        <div 
                        className='area--title'
                        >
                           Preço
                        </div>
                        <div 
                        className='area--input'
                        >
                            <MaskedInput
                            mask={priceMask}
                            placeholder="R$ "
                            disabled = {disabled || priceNegociabled}
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            required
                            />
                        </div>
                    </label>
                    <label 
                    className='area'
                    >
                        <div 
                        className='area--title'
                        >
                            Preço Negociável 
                        </div>
                        <div 
                        className='area--input'
                        >
                            <input
                            className="check"
                            type="checkbox"
                            disabled = {disabled}
                            onChange={e => setPriceNegociabled(!priceNegociabled)}
                            checked = {priceNegociabled}
                            />
                        </div>
                    </label>
                    <label 
                    className='area'
                    >
                        <div 
                        className='area--title'
                        >
                          Descrição
                        </div>
                        <div 
                        className='area--input'
                        >
                            <textarea
                            disabled = {disabled}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            >

                            </textarea>
                        </div>
                    </label>
                    <label 
                    className='area'
                    >
                        <div 
                        className='area--title'
                        >
                          Imagens (1 ou mais)
                        </div>
                        <div 
                        className='area--input'
                        >
                            <input
                            disabled = {disabled}
                            value={description}
                            ref={fileFild}
                            type="file"
                            multiple
                            />
                        </div>
                    </label>
                    <label 
                    className='area'
                    >
                        <div 
                        className='area--title'
                        >
                            
                        </div>
                        <div 
                        className='area--input'
                        >
                            <button
                            disabled = {disabled}
                            >
                                Adicionar Anúncio
                            </button>
                        </div>
                    </label>
                        </div>
                    </form>
                </ModalAll>
            </Modal>
            }
        </PageContainer>
    )
}

export default Page