import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useNavigate, useParams} from 'react-router-dom';
import { getBlogById, create, updateBlog } from '../Services/AdminServices';


function EditBlog()
{

  const navigate = useNavigate(); 
  const { BlogId} = useParams();
  const[title,setBlogtitle] = useState('');
  const[content,setBlogcontent] = useState('');
  const[author,setBlogauthor] = useState('');
  const [titleError, settitleError] = useState(false);
  const [contentError, setcontentError] = useState(false);
  const [authorError, setauthorError] = useState(false);

  const  onClick= () => {
    navigate("/"); 
  };
   
  const saveClick = async () => {
    let error = false;

    if (title === "") {
      settitleError(true);
      error = true;
    } else {
      settitleError(false);
    }

    if (content === "") {
      setcontentError(true);
      error = true;
    } else {
      setcontentError(false);
    }

    if (author === "") {
      setauthorError(true);
      error = true;
    } else {
      setauthorError(false);
    }

    if (error) return;
    let data = {
      title: title,
      content: content,
      author:author,
      
    }
    await create(data);
    setTimeout(() => {
      navigate('/');
    }, 2000);

  }



    const handleButtonClick = () => {
      navigate('/'); 
    };

    
  useEffect(() => {
    if (BlogId) {
      getBlogById(BlogId).then((res) => {
        
        let data = res?.data?.blog;
        console.log(data)
        setBlogtitle(data?.title);
        setBlogcontent(data?.content);
        setBlogauthor(data?.author);
       
      })
    }
  }, []);
 
   
         
    return (
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", fontFamily: "Oxygen", textAlign: "left", ml: 2 }}>
              Edit Category
          </Typography>
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 2 }}>
          <TextField id="outlined-basic" label="Title" variant="outlined" size="small"value={title} error={titleError}  onChange={(e) => { setBlogtitle(e.target.value) }} />
                <TextField id="outlined-basic" label="Content" variant="outlined" size="small" error={contentError} value={content}   onChange={(e) => { setBlogcontent(e.target.value) }}/>
                <TextField id="outlined-basic" label="Author" variant="outlined" size="small" error={authorError} value={author} onChange={(e) => { setBlogauthor(e.target.value) }}/>
              <Button variant="contained" sx={{ bgcolor: 'success.main', '&:hover': { bgcolor: 'success.dark' } }} onClick={saveClick}>
                  Save Category
              </Button>
          </Box>
      </Grid>
  </Grid>
    
    );
  }
  export default EditBlog;

 