'use client';
import { useState, useEffect } from 'react';
import './gallery.css';
import { X, Upload, Plus } from 'lucide-react';

const initialImages = [
  { id: 1, url: '/images/meeting.png', title: 'Client Meeting Q1', category: 'Client Meetings' },
  { id: 2, url: '/images/meeting.png', title: 'Financial Planning Session', category: 'Investment Awareness Programs' },
  { id: 3, url: '/images/meeting.png', title: 'Awareness Seminar 2023', category: 'Investment Awareness Programs' },
  { id: 4, url: '/images/meeting.png', title: 'Our Office', category: 'Office Activities' },
  { id: 5, url: '/images/meeting.png', title: 'Team Building', category: 'Office Activities' },
  { id: 6, url: '/images/meeting.png', title: 'Wealth Management Certification', category: 'Certifications' },
];

const categories = ['All', 'Investment Awareness Programs', 'Client Meetings', 'Office Activities', 'Certifications'];

export default function GalleryPage() {
  const [images, setImages] = useState(initialImages);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);
  
  const [showUpload, setShowUpload] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newImage, setNewImage] = useState({ url: '', title: '', category: 'Client Meetings' });

  // Load from localStorage if available (mock backend persistence)
  useEffect(() => {
    const saved = localStorage.getItem('gg_gallery_images');
    if (saved) {
      try {
        setImages(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse gallery images');
      }
    } else {
      localStorage.setItem('gg_gallery_images', JSON.stringify(initialImages));
    }
  }, []);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!newImage.url || !newImage.title) return alert('Please provide image URL and Title');
    
    const imageObj = {
      id: Date.now(),
      url: newImage.url,
      title: newImage.title,
      category: newImage.category
    };
    
    const updated = [imageObj, ...images];
    setImages(updated);
    localStorage.setItem('gg_gallery_images', JSON.stringify(updated));
    setShowUpload(false);
    setNewImage({ url: '', title: '', category: 'Client Meetings' });
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updated = images.filter(img => img.id !== id);
      setImages(updated);
      localStorage.setItem('gg_gallery_images', JSON.stringify(updated));
    }
  };

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="gallery-page">
      <div className="page-header diagonal-bg-primary">
        <div className="container text-center">
          <h1>Image Gallery</h1>
          <p>Memories, Milestones, and Meetings</p>
        </div>
      </div>

      <section className="gallery-section">
        <div className="container">
          
          <div className="gallery-controls">
            <div className="category-filters">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <button className="btn btn-secondary flex items-center gap-2" onClick={() => {
              if (!isAdmin) {
                const password = prompt("Please enter admin password:");
                if (password === "admin") {
                  setIsAdmin(true);
                  setShowUpload(!showUpload);
                } else {
                  alert("Incorrect password");
                }
              } else {
                setShowUpload(!showUpload);
              }
            }}>
              {showUpload ? 'Close Upload' : <><Upload size={18} /> Admin Upload</>}
            </button>
          </div>

          {showUpload && (
            <div className="upload-container">
              <h3>Admin Upload Image</h3>
              <form onSubmit={handleUpload} className="upload-form">
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setNewImage({...newImage, url: reader.result});
                      };
                      reader.readAsDataURL(file);
                    }
                  }} 
                  required
                />
                <input 
                  type="text" 
                  placeholder="Image Title" 
                  value={newImage.title} 
                  onChange={(e) => setNewImage({...newImage, title: e.target.value})} 
                  required
                />
                <select 
                  value={newImage.category} 
                  onChange={(e) => setNewImage({...newImage, category: e.target.value})}
                >
                  {categories.filter(c => c !== 'All').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <button type="submit" className="btn btn-primary">Publish to Gallery</button>
              </form>
            </div>
          )}

          <div className="photo-grid mt-4">
            {filteredImages.map(img => (
              <div 
                key={img.id} 
                className="photo-item"
                onClick={() => setLightboxImg(img)}
              >
                <img src={img.url} alt={img.title} loading="lazy" />
                <div className="photo-overlay">
                  <h4>{img.title}</h4>
                  <span>{img.category}</span>
                  {isAdmin && (
                    <button 
                      className="btn" 
                      style={{backgroundColor: 'red', color: 'white', marginTop: '10px', fontSize: '12px', padding: '4px 8px'}} 
                      onClick={(e) => handleDelete(img.id, e)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg.url} alt={lightboxImg.title} />
            <div className="lightbox-caption">
              <h3>{lightboxImg.title}</h3>
              <p>{lightboxImg.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
