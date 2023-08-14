const Admin =require('../models/adminSchema')
const Book =require('../models/postSchema')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const login=async(req,res)=>{
    try {
        const{password,email}=req.body
        const existuser=await Admin.findOne({email:email})
        if(!existuser){
            res.status(400).json({msg:"email not found make sure to register"})
        }
        else{
            const checkPW = await bcrypt.compare(password,existuser.password);
            if(!checkPW){
                res.status(400).json({msg:"wrong password,try again"})
            }
            else{
                const token=jwt.sign({id:existuser._id},process.env.JWT,{expiresIn:'7d'})
                res.status(200).json({msg:"succesfully login",user:existuser,token:token})
            }
        }
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ msg: "something went wrong", err: error });
    }
    
    
    }

    const addBook=async(req,res)=>{
        try {
            const{bookname,description,author,image,price}=req.body
            const newBook=await Book.create(req.body)
           
                res.status(201).json({msg:"book created",newBook:newBook})
            
        } catch (error) {
            console.error("error in adding book", error);
            res.status(500).json({ msg: "something went wrong", err: error });
        }
        
        
        }
        const getBook = async (req, res) => {
            try {
                const bookId = req.params.id; // Assuming you'll pass the book's ID as a parameter
                const book = await Book.findById(bookId);
                
                if (!book) {
                    res.status(404).json({ msg: "Book not found" });
                } else {
                    res.status(200).json({ msg: "Book retrieved", book });
                }
            } catch (error) {
                console.error("Error during book retrieval:", error);
                res.status(500).json({ msg: "Something went wrong", err: error });
            }
        }

        const getAllBooks = async (req, res) => {
            try {
                const books = await Book.find();
                res.status(200).json({ msg: "All books retrieved", books });
            } catch (error) {
                console.error("Error during books retrieval:", error);
                res.status(500).json({ msg: "Something went wrong", err: error });
            }
        }
        
        const deleteBook = async (req, res) => {
            try {
                const bookId = req.params.id; 
                const deletedBook = await Book.findByIdAndDelete(bookId);
                
                if (!deletedBook) {
                    res.status(404).json({ msg: "Book not found" });
                } else {
                    res.status(200).json({ msg: "Book deleted", deletedBook });
                }
            } catch (error) {
                console.error("Error during book deletion:", error);
                res.status(500).json({ msg: "Something went wrong", err: error });
            }
        }
        
        const updateBook = async (req, res) => {
            try {
                const bookId = req.params.id;
                const { bookname, description, author, image, price } = req.body;
                
                const updatedBook = await Book.findByIdAndUpdate(
                    bookId,
                    { bookname, description, author, image, price },
                    { new: true }
                );
        
                if (!updatedBook) {
                    res.status(404).json({ msg: "Book not found" });
                } else {
                    res.status(200).json({ msg: "Book updated", updatedBook });
                }
            } catch (error) {
                console.error("Error during book update:", error);
                res.status(500).json({ msg: "Something went wrong", err: error });
            }
        }
        
        module.exports = { login, addBook, deleteBook, updateBook, getBook,getAllBooks };
        
    
    