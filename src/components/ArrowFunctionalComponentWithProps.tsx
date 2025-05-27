// type Props = {
//     title: string
// }

// interface Props {
//     title: string
// }

// type Props = {
//     title: string
//     description: string
// }

// type A = {
//     title: string
// }
//
// type B = {
//     description: string
// }
//
// type MergeProps = A & B

interface Props {
    title: string
}

interface Props {
    description: string
}

const ArrowFunctionalComponentWithProps = ({title, description}: Props) => {
    return (
        <>
            <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
            <p className="text-center text-grey-800">{description}</p>
        </>
    )


}

export default ArrowFunctionalComponentWithProps