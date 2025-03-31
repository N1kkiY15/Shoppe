export default function goToPageItem() {
    const navigateToPage = (productsID: number) => {
        navigateTo(`/item/${productsID}`);
    };

    return { navigateToPage };
}