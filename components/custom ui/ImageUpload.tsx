import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '../ui/button';

const ImageUpload = () => {
    return (
        <CldUploadWidget uploadPreset="iqa5ywcb">
            {({ open }) => {
                return <Button onClick={() => open()} className="bg-grey-1 text-white">Upload Image</Button>;
            }}
        </CldUploadWidget>
    )
}

export default ImageUpload