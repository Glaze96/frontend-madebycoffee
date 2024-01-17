interface ButtonProps {
  title: string,
  callback: Function,
  icon?: string,
}

const Button = ( { title, callback } : ButtonProps ) => {

  return (
    <button className="bg-primary rounded-md hover:scale-110" onClick={() => callback()} >
      <h1 className="px-4 py-2">{title}</h1>
    </button>
  )
}

export default Button