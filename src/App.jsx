import './App.css';

function App(){
  const palavras_chave = ["linux", 
  "docker", "server", "rails", "douane", "my-developments","command-line", 
  "ruby", "c-2", "linux-on-mac", "maintenance", "security", "gnome", 
  "kubernetes","mes-developpements", "ubuntu", "python", "vcs", "capybara", 
  "contribution", "git", "apt","bazaar", "chef", "cucumber", "debian", "game", 
  "howto", "packaging", "testing", "boost", "debug","devise", "elixir", "gtk", 
  "homebrew", "information", "ssh", "tuxtremsplit", "xpath"]

return(
  <div className='container'>
     
     {palavras_chave.map((elemento)=> <button className='texto'>{elemento}</button>)}
  
  </div>

)
}
export default App