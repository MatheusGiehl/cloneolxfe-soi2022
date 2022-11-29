import styled from 'styled-components'

export const PageArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .pageTop {
        margin-top: 20px;
        width: 100%;
        height: auto;
        display: flex;
        margin-bottom: 20px;

        .pageTopLeft {
            width: 300px;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .imgProfile {
                
                img {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                }
            }

            .infoProfile {
                width: 80%;
                height: auto;
                text-align: center;

                h1 {
                    margin-top: 10px;
                    font-size: 15px;
                    color: #000;
                }

                p {
                    margin: 10px 0;
                    color: #999;
                }
            }
        }

        .pageTopRight {
            flex: 1;
            border: 1px solid #999;
            border-radius: 5px;

            .formRight {
                display: flex;
                justify-content: flex-end;
                flex-wrap: wrap;

                .area {
                    display: flex;
                    padding: 10px;
                    width: 50%;
                    flex-direction: column;

                    .area--title {
                        width: 100%;
                        text-align: left;
                        padding-right: 20px;
                        font-size: 14px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }

                    .area--input {
                        flex: 1;

                    input, select {
                        width: 100%;
                        font-size: 14px;
                        padding: 5px;
                        border: 1px solid #DDD;
                        border-radius: 3px;
                        outline: none;
                        transition: all ease 0.3s;

                        &:focus {
                            border: 1px solid #333;
                            color: #333;
                        }
                    }

                    span {
                        font-size: 12px;
                        color: red !important;
                    }
                  }

                  button {
                    background-color: #0089FF;
                    border: none;
                    outline: none;
                    padding: 5px 10px;
                    color: #FFF;
                    font-size: 15px;
                    cursor: pointer;
                    border-radius: 4px;
                    }

                    &:hover {
                        background-color: #006FCE;
                    }
                }
            }
        }
    }

.pageBottom {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .adsList {
        width: 100%;

        .slick-prev, .slick-next {

            &:before {
                color: #000 !important;
            }
        }

        .adItem {
            width: 100%;
        }
    }
}
`

export const ModalAll = styled.div `
   width: 100%;
   height: 100%;
   display: flex;

   form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .area--button {
    flex: 1;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;

    button {
        width: 300px;
        height: 40px;
        background-color: #0089FF;
        border: none;
        outline: none;
        padding: 5px 10px;
        cursor: pointer;
        color: #FFF;
        font-size: 15px;
        border-radius: 4px;

        &:hover {
            background-color: #006FCE;
        }
    }
  }

  .modalContent {
    width: 100%;
    height: 100%;
    display: flex;
    

    .modalLeft {
        width: 50%;
        height: 100%;
    }

    .modalRight {
        width: 50%;
        height: 100%;
    }
  }

  .area--checkbox {
    display: flex;
    flex-direction: column !important;
    justify-content: center !important;

    .area--title {
        width: 100%;
        height: 100%;
        text-align: left;
    }

    .area--input {
        display: flex;
        width: 15px;
    }
  }

  .area {
    display: flex;
    padding: 10px;
    width: 100%;
    flex-direction: column;
    border-bottom: 1px solid #DDD;

    .area--title {
        width: 100%;
        text-align: center;
        padding-right: 20px;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .area--input {
        flex: 1;

        input , select {
            width: 100%;
            font-size: 14px;
            padding: 5px;
            border: 1px solid #DDD;
            border-radius: 3px;
            outline: none;
            transition: all ease 0.3s;

            &:focus {
                border: 1px solid #333;
                color: #333;
            }
        }

        span {
            font-size: 12px;
            color: red !important;
        }

        textarea {
            width: 100%;
            height: 100px;
            resize: none;
        } 
    }
  }
}
`