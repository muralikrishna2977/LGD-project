import React, { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | any>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Drone Views", "Development", "Events", "Customers"];

  const images = [
    { id: 1, category: "Drone Views", src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80", title: "Aerial View - Green Valley" },
    { id: 2, category: "Development", src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80", title: "Road Construction" },
    { id: 3, category: "Drone Views", src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80", title: "Sunrise Paradise Overview" },
    { id: 4, category: "Events", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80", title: "Project Launch Event" },
    { id: 5, category: "Customers", src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80", title: "Happy Landowners" },
    { id: 6, category: "Development", src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", title: "Infrastructure Work" },
    { id: 7, category: "Drone Views", src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80", title: "Royal Gardens Aerial" },
    { id: 8, category: "Events", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", title: "Groundbreaking Ceremony" },
    { id: 9, category: "Customers", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", title: "Client Meeting" },
    { id: 10, category: "Development", src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", title: "Modern Infrastructure" },
    { id: 11, category: "Drone Views", src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", title: "Emerald Heights" },
    { id: 12, category: "Events", src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80", title: "Venture Inauguration" }
  ];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div>

      {/* HERO */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/90"></div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Showcasing Our Excellence in Every Frame
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-8 bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeCategory === category
                  ? "bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm">{image.category}</p>
                    <p className="text-lg font-bold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.src}
              className="w-full rounded-xl shadow-xl"
            />
            <p className="text-center text-white mt-4 text-xl">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
