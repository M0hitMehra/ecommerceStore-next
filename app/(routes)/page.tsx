import getBillboards from "@/actions/get-billboards"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductsList from "@/components/products-list"
import Container from "@/components/ui/container"

export const revalidate = 0

const HomePage = async () => {
    const billboard = await getBillboards('b3cd30f6-013e-4069-a4c4-f3899f1f9e66')
    const products = await getProducts({
        isFeatured: true,
    })
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductsList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}
export default HomePage