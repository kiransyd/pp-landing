import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image 
            src="/pplogo.png" 
            alt="PracticePapers.io" 
            width={200} 
            height={48} 
            className={cn('h-auto w-auto', className)}
        />
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <Image 
            src="/pplogo.png" 
            alt="PracticePapers.io" 
            width={48} 
            height={48} 
            className={cn('size-10', className)}
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <Image 
            src="/pplogo.png" 
            alt="PracticePapers.io" 
            width={71} 
            height={25} 
            className={cn('size-7 w-7', className)}
        />
    )
}
