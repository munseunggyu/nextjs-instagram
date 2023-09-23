import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';

export default function NewIcon({isFill}: {isFill: Boolean}) {
  if(isFill) {
    return (
      <BsPlusSquareFill className="w-6 h-6" />
    )
  }

  return (
    <BsPlusSquare className="w-6 h-6" />
  )
}
