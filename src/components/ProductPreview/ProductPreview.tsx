import image from '../../assets/images/slotify-desktop-preview.png';

const ProductPreview = () => {
  return (
    <section id="product" className="flex flex-col bg-base items-center p-4 rounded-lg shadow-md overflow-hidden">
        <img src={image} alt="Product Preview" className="w-[150%] max-w-none self-start md:self-auto md:w-full md:max-w-full h-auto rounded-md mb-4" />
    </section>
  );
}

export default ProductPreview;