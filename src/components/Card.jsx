
const Card = ({ icon, title, children }) => {
  return (
    <div className="bg-white rounded-md border-l-4 border-l-blue-500 p-5 shadow-sm border-y border-r">
      <h3 className="text-xl font-semibold text-black mb-3 pb-2 flex items-center gap-2 border-b-2 border-gray-300">
        <span className="text-2xl">{icon}</span>
        {title}
      </h3>
      <div className="text-black text-base leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export default Card