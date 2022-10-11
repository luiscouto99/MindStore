import {
  SidebarButton,
  SidebarForm,
  SidebarIcon,
  SidebarInput,
  SidebarInputText,
  SidebarLabel,
} from '../../../../../components/Layout/Layout';

import arrowRight from '../../../../../assets/arrow-right.png';

function CategoryButton({
  handleCategoryFetch,
  handleCategoryClick,
  isCategoryClicked,
}: {
  handleCategoryFetch: (link: string) => void;
  handleCategoryClick: () => void;
  isCategoryClicked: boolean;
}) {
  const handleCategoryChange = (event: any) => {
    const field = event.target.value;
    const link = `/category?category=${field}&pagesize=12&direction=`;
    handleCategoryFetch(link);
  };
  return (
    <>
      <SidebarButton marginLeft onClick={handleCategoryClick} value="category">
        Category
        <SidebarIcon rotation={isCategoryClicked} src={arrowRight} alt="" />
      </SidebarButton>

      {isCategoryClicked && (
        <SidebarForm>
          <SidebarLabel>
            <SidebarInput
              type="radio"
              name="category"
              onChange={handleCategoryChange}
              value="women's+clothing"
            />
            <SidebarInputText>Women`&apos;`s Clothing</SidebarInputText>
          </SidebarLabel>

          <SidebarLabel>
            <SidebarInput
              type="radio"
              name="category"
              onChange={handleCategoryChange}
              value="men's+clothing"
            />
            <SidebarInputText>Men`&apos;`s Clothing</SidebarInputText>
          </SidebarLabel>

          <SidebarLabel>
            <SidebarInput
              type="radio"
              name="category"
              onChange={handleCategoryChange}
              value="jewelery"
            />
            <SidebarInputText>Jewellery</SidebarInputText>
          </SidebarLabel>

          <SidebarLabel>
            <SidebarInput
              type="radio"
              name="category"
              onChange={handleCategoryChange}
              value="electronics"
            />
            <SidebarInputText>Electronics</SidebarInputText>
          </SidebarLabel>
        </SidebarForm>
      )}
    </>
  );
}

export default CategoryButton;
