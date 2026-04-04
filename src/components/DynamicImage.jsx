import { useEffect, useState } from 'react'

// Simple in-memory cache to prevent re-fetching the same image during a session
const imageCache = {}

function DynamicImage({ title, fallback, alt, className }) {
  const [src, setSrc] = useState(imageCache[title] || fallback)

  useEffect(() => {
    // Whenever title or fallback changes, we reset the visual src first.
    if (imageCache[title]) {
      setSrc(imageCache[title])
      return
    } else {
      setSrc(fallback)
    }

    let isMounted = true

    const fetchRealImage = async () => {
      try {
        // Map specific locations to better visual searches to avoid maps or political photos
        let searchQuery = title;
        if (searchQuery === 'Tirupathur') searchQuery = 'Yelagiri Hills Tirupathur';
        if (searchQuery === 'Sivaganga') searchQuery = 'Chettinad Palace Sivaganga';
        if (searchQuery === 'Kallakurichi') searchQuery = 'Kalvarayan Hills';

        const query = encodeURIComponent(searchQuery)
        const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrlimit=1&gsrsearch=${query}&prop=pageimages&format=json&pithumbsize=800&origin=*`
        
        const res = await fetch(url)
        const data = await res.json()
        const pages = data.query?.pages
        
        if (pages) {
          const pageId = Object.keys(pages)[0]
          if (pageId && pages[pageId].thumbnail) {
            const wikiSrc = pages[pageId].thumbnail.source
            imageCache[title] = wikiSrc
            if (isMounted) setSrc(wikiSrc)
            return
          }
        }
        
        imageCache[title] = fallback
        if (isMounted) setSrc(fallback)
      } catch (e) {
        console.error('Image fetch error:', e)
        imageCache[title] = fallback
        if (isMounted) setSrc(fallback)
      }
    }

    fetchRealImage()

    return () => {
      isMounted = false
    }
  }, [title, fallback])

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      loading="lazy"
      onError={(e) => {
        // If the current image errors out, use a guaranteed static realistic image to prevent blanks
        if (e.target.src !== 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80') {
          e.target.src = 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80'
        }
      }} 
    />
  )
}

export default DynamicImage
