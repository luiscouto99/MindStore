// @ts-nocheck
import { SidebarButton, SidebarForm, SidebarIcon, SidebarInput, SidebarInputText, SidebarLabel } from "../../../components/Layout/Layout";

import arrowRight from "../../../assets/arrow-right.png";

function PriceButton({ handlePriceFetch, handlePriceClick, isPriceClicked }) {
    const priceObject01 = { min: 0, max: 50 };
    const priceObject02 = { min: 51, max: 100 };
    const priceObject03 = { min: 101, max: 300 };
    const priceObject04 = { min: 301, max: 800 };
    const priceObject05 = { min: 801, max: 1200 };
    const priceObject06 = { min: 1201, max: 3000 };
    const priceObject07 = { min: 3001, max: 5000 };

    function handlePriceChange(priceObject) {
        const min = priceObject.min;
        const max = priceObject.max;
        const link = `/price?pagesize=12&min=${min}&max=${max}&direction=`;
        handlePriceFetch(link);
    }

    return (
        <>
            <SidebarButton marginLeft onClick={handlePriceClick} value="price">
                Price
                <SidebarIcon rotation={isPriceClicked} src={arrowRight} alt="" />
            </SidebarButton>

            {
                isPriceClicked && (
                    <SidebarForm>
                        <SidebarLabel>
                            <SidebarInput type="radio" name="price" onChange={() => handlePriceChange(priceObject01)} value={priceObject01} />
                            <SidebarInputText>0€ &nbsp; to &nbsp;  50€</SidebarInputText>
                        </SidebarLabel>

                        <SidebarLabel>
                            <SidebarInput type="radio" name="price" onChange={() => handlePriceChange(priceObject02)} value={priceObject02} />
                            <SidebarInputText>51€ &nbsp; to &nbsp; 100€</SidebarInputText>
                        </SidebarLabel>

                        <SidebarLabel>
                            <SidebarInput type="radio" name="price" onChange={() => handlePriceChange(priceObject03)} value={priceObject03} />
                            <SidebarInputText>101€ &nbsp; to &nbsp; 300€</SidebarInputText>
                        </SidebarLabel>

                        <SidebarLabel>
                            <SidebarInput type="radio" name="price" onChange={() => handlePriceChange(priceObject04)} value={priceObject04} />
                            <SidebarInputText>301€ &nbsp; to &nbsp; 800€</SidebarInputText>
                        </SidebarLabel>

                        <SidebarLabel>
                            <SidebarInput type="radio" name="price" onChange={() => handlePriceChange(priceObject05)} value={priceObject05} />
                            <SidebarInputText>801€ &nbsp; to &nbsp; 1200€</SidebarInputText>
                        </SidebarLabel>

                        <SidebarLabel>
                            <SidebarInput type="radio" name="price" onChange={() => handlePriceChange(priceObject06)} value={priceObject06} />
                            <SidebarInputText>1201€ &nbsp; to &nbsp; 3000€</SidebarInputText>
                        </SidebarLabel>

                        <SidebarLabel>
                            <SidebarInput type="radio" name="price" onChange={() => handlePriceChange(priceObject07)} value={priceObject07} />
                            <SidebarInputText>3001€ &nbsp; to &nbsp; 5000€</SidebarInputText>
                        </SidebarLabel>
                    </SidebarForm>
                )
            }
        </>
    );
}

export default PriceButton