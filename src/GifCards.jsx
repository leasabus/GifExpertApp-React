
export const GifCards = ({tittle,url, id}) => {


  return (
   
     <div className="card">
        <img src={url} alt={tittle} />
        
    </div>
   
  )
}
