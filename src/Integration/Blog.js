import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import { 
  TableContainer, 
  Table, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody,
  IconButton,
  Tooltip,
  Dialog,
  DialogContent,
  DialogTitle
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { getAll, deleteBlog as deleteBlogService } from '../Services/AdminServices'; 
import { getBlogById } from '../Services/AdminServices';


function createData(title,content,author){
  return(title,content,author)
}

function Blog() {
  const navigate = useNavigate(); 
  const [Blogs, setBlogs] = useState([]);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [BlogId, setBlogId] = useState("");

  const deleteDialogOpen = (id) => {
    setBlogId(id);
    setDeleteDialog(true);
  };

  const deleteDialogCancel = () => {
    setBlogId("");
    setDeleteDialog(false);
  };

  const getBlogs = async () => {
    try {
      const res = await getAll();
      let response = res?.data.blogs;
      console.log(response);
      setBlogs(response);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getBlogs();
  }, []);

  const handleButtonClick = () => {
    navigate('/Integration/AddBlog'); 
  };

  const deleteBlog = (id) => {
    deleteBlogService(id)
      .then((res) => {
        toast.success(res?.data?.message);
        setTimeout(() => {
          getBlogs();
          deleteDialogCancel();
        }, 2000);
      })
      .catch((err) => { toast.error(err.response.data.message); });
  };

  

  const editBlog = (id) => {
    console.log(id);
    navigate(`/Integration/EditBlog/${id}`)
  }

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "Oxygen", textAlign: "left", marginLeft: "2", gap: 2, p: 2 }}>
        Categories
        <Button variant="outlined" sx={{ textAlign: "left" }} startIcon={<SearchIcon />}>Search</Button>
      </Typography>
    
      <div style={{ padding: '16px', textAlign: "right" }}>
        <Button variant="contained" color="success" startIcon={<PersonIcon />} onClick={handleButtonClick}>Add New Category</Button>
      </div>

      <TableContainer>
        <Table sx={{ minWidth: 650, border: '1px solid #CECECE' }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#10B981' }}>
              <TableCell sx={{ color: 'white' }} align="center">Title</TableCell>
              <TableCell sx={{ color: 'white' }} align="center">Content</TableCell>
              <TableCell sx={{ color: 'white' }} align="center">Author</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Edit</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Blogs.map((row) => (
              <TableRow key={row?._id}>
                <TableCell component="th" scope="row" sx={{ padding: '20px' }}>
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  {row.content}
                </TableCell>
                <TableCell align="center">
                  {row.author}
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Edit">
                    <IconButton onClick={() => editBlog(row?._id)} color="primary">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Delete">
                    <IconButton onClick={() => deleteDialogOpen(row?._id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={deleteDialog}
        onClose={() => deleteDialogCancel()}
      >
        <DialogTitle>
          Are you sure you want to remove this category?
        </DialogTitle>
        <DialogContent>
          <div style={{ display: "flex", justifyContent: "center", gap: 2, flexDirection: 'wrap' }}>
            <Button variant="contained" color='primary' sx={{ fontSize: 15 }} onClick={() => { deleteBlog(BlogId) }}>YES</Button>
            <Button color='error' sx={{ fontSize: 15 }} onClick={deleteDialogCancel} >NO</Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: 'rgb(46, 125, 50)',
              color: 'white'
            },
            iconTheme: {
              primary: 'rgb(46, 125, 50)',
              secondary: 'white',
            },
          },
          error: {
            style: {
              background: 'rgb(211, 47, 47)',
              color: 'white'
            },
            iconTheme: {
              primary: 'rgb(211, 47, 47)',
              secondary: 'white',
            },
          },
        }}
      />
    </div>
  );
}

export default Blog;
