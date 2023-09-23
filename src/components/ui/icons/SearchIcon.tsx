import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';

export default function SearchIcon({isFill}: {isFill: Boolean}) {
  if(isFill) {
    return (
      <RiSearchFill className="w-6 h-6" />
    )
  }
  return (
    <RiSearchLine className="w-6 h-6" />
  )
}
