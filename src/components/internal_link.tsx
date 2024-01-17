import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

interface InternalLinkProps {
  label: string,
  href: string,
  external: boolean
}

const InternalLink = ( {label, href, external } : InternalLinkProps ) => {

  return (
    <Link href={href} target={external ? "_blank" : ""}>
      <div className='flex flex-row items-baseline space-x-2'>
        <h1 className="lg:text-md underline">{label}</h1>
        <div className='w-5'>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </Link>
  )
}

export default InternalLink;