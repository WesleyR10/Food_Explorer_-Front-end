import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText"
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Textarea } from '../../components/Textarea'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { api } from '../../services/api';
import { Container } from "./styles";
import { Button } from "../../components/Button";


export function EditProduct() {
  const [fetchCategories, setFetchCategories] = useState([]);
  const [fetchProducts, setFetchProducts] = useState({})
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [title, setTitle] = useState("")
  const [thumbnailUrl, setThumbnailUrl] = useState()
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("");
  }

  function handleRemoveTag(deleted) {
    setIngredients(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setThumbnailUrl(file); // Armazenar o arquivo real, não apenas o nome

    const label = document.querySelector('.input-file label');
    if (label) {
      label.textContent = `Arquivo selecionado: ${file.name}`;
    }
  }

  function formatPrice(price) {
    return Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function formatPriceForInput(value) {
    return value ? Number(value.replace('R$', '').replace(',', '.')) : 0;
  }

  async function handleNewProduct() {
    if (!title) {
      return alert("Digite o título da produto.")
    }

    if (ingredients.length === 0) {
      return alert("Insira o ingrediente presente no seu produto.")
    }

    if (newIngredient) {
      return alert("Você deixou um ingrediente no campo para adicionar, mas nao clicou em adicionar.")
    }

    if (category === "") {
      alert("Por favor, selecione uma categoria válida.");
    }

    if (!price) {
      return alert("Digite o preço do produto.")
    }

    try {
      const data = new FormData();
      data.append('title', title);
      data.append('description', description);
      const formattedPrice = formatPrice(price); // Formata o preço
      data.append('value', formattedPrice);
      data.append('category', category);
      data.append('ingredients', JSON.stringify(ingredients)); // Transforma array em string
      if (thumbnailUrl) { // Adiciona essa verificação para enviar ou não a nova imagem
        data.append('thumbnailUrl', thumbnailUrl);
      }
      const response = await api.put(`products/${params.id}`, data);
      console.log("Resposta da API:", response); // Log da resposta da API

      alert('Nota criada com sucesso!');
      navigate(-1);

    } catch (error) {
      console.error('Erro ao criar nota:', error);
    }
  }

  async function handleDeleteProduct() {
    const deleteProduct = await api.delete(`products/${params.id}`);
    if (deleteProduct) {
      alert("Produto deletado com sucesso ")
      navigate("/")
    } else {
      alert("Obtivemos um erro ao tentar deletar, gentileza entrar em contato com o suporte.")
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const categoryResponse = await api.get('/category');
        setFetchCategories(categoryResponse.data);

        const productResponse = await api.get(`products/${params.id}`)
        console.log(productResponse.data)
        setFetchProducts(productResponse.data)
        setTitle(productResponse.data.title || '')
        setCategory(productResponse.data.category_id); // Definindo o estado de categoria com o valor inicial
        setIngredients(productResponse.data.ingredients || []); // Setando os ingredients com os ingredients do banco de dados
        setPrice(formatPriceForInput(productResponse.data.value)); // Convertendo o valor do banco para o formato correto
        setDescription(productResponse.data.description || ""); // Setar a descrição do produto no estado
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, [params.id]);


  return (
    <Container>
      <Header />
      {fetchProducts && (
        <div className='content' key={fetchProducts.id}>
          <ButtonText onClick={handleBack} icon={FaChevronLeft} title="voltar" className="btnBack" />
          <h1>Editar prato</h1>

          <div className="section1 ">
            <div className="input-file">
              <p>Imagem do prato</p>

              <label htmlFor="imgDish"> <MdOutlineFileUpload /> {fetchProducts.thumbnailUrl} </label>
              <Input id='imgDish' type='file' placeholder="Selecione imagem" onChange={handleChangeImage} required />

            </div>

            <div className="input-wrapper">
              <label htmlFor="name">Nome</label>
              <Input id='name' className='name' type='text' placeholder="Ex.: Salada Caesar" value={title} onChange={e => setTitle(e.target.value)} required />
            </div>

            <div className="input-wrapper category" >
              <label htmlFor="category" className="category">Categoria</label>
              <Input id='category' type='select' icon={FaChevronDown} value={category} onChange={e => setCategory(e.target.value)} required>
                {fetchCategories && fetchCategories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </Input>
            </div>
          </div>

          <div className="section2">
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="ingredients">
              {
                ingredients.map((ingredient, index) => (
                  <NoteItem key={String(index)} value={ingredient} onClick={() => handleRemoveTag(ingredient)} />
                ))
              }
              <NoteItem isNew placeholder="Adicionar" value={newIngredient} onChange={e => setNewIngredient(e.target.value)} onClick={handleAddTag} required />
            </div>

            <label htmlFor="value">Preço</label>
            <Input id='value' className='value' type='currency' placeholder="R$ 00,00" value={price} onChange={(event, value) => setPrice(value)} required />
          </div>

          <label htmlFor="description">Descrição</label>
          <Textarea placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' value={fetchProducts.description} onChange={e => setDescription(e.target.value)} />

          <div className="buttons">
            <Button title="Excluir prato" onClick={handleDeleteProduct} className="delete" />
            <Button title="Salvar alterações" onClick={handleNewProduct} className="save" />
          </div>
        </div>
      )}
    </Container>
  )
}