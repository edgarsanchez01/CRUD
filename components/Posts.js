import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [editPostId, setEditPostId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('error al obtener datos:', error);
      });
  };

  const createPost = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        console.log('Post creado:', response.data);
        setPosts([...posts, response.data]);
        setNewPost({ title: '', body: '' });
      })
      .catch(error => {
        console.error('error al crear el post:', error);
      });
  };

  const updatePost = (id, updatedPost) => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedPost)
      .then(response => {
        console.log('Post actualizado:', response.data);
        const updatedPosts = posts.map(post => (post.id === id ? response.data : post));
        setPosts(updatedPosts);
        setEditPostId(null);
      })
      .catch(error => {
        console.error('Error al actualizar datos:', error);
      });
  };

  const deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        console.log('Post eliminado:', id);
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
      })
      .catch(error => {
        console.error('Error al actualizar datos:', error);
      });
  };

  return (
    <div className="container">
      <h3 className="my-4">Nuevo Post</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Título"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Contenido"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button className="btn btn-success btn-block" onClick={createPost}>Crear Post</button>
      </div>
      <h2 className="my-4">Posts</h2>
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card">
              <div className="card-body">
                {editPostId === post.id ? (
                  < div>
                    <input
                      type="text"
                      className="form-control mb-3"
                      value={post.title}
                      onChange={(e) => setPosts(posts.map(p => (p.id === post.id ? { ...p, title: e.target.value } : p))) }
                    /> 
                    <input
                      type="text"
                      className="form-control mb-3"
                      value={post.body}
                      onChange={(e) => setPosts(posts.map(p => (p.id === post.id ? { ...p, body: e.target.value } : p)))}
                    />
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-warning mr-2" onClick={() => updatePost(post.id, post)}>Actualizar</button>
                      <button className="btn btn-secondary" onClick={() => setEditPostId(null)}>Cancelar</button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h5 className="card-title">{post.id} {post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <div className="d-flex">
                      <button className="btn btn-warning" onClick={() => setEditPostId(post.id)}>Editar</button>
                      <button className="btn btn-danger" onClick={() => deletePost(post.id)}>Eliminar</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;