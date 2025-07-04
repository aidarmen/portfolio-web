import { BookOpen, ExternalLink } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "Electronic stethoscope for detecting heart abnormalities in athletes",
    journal: "2020 21st International Arab Conference on Information Technology (ACIT)",
    url: "https://ieeexplore.ieee.org/abstract/document/9300109",
  },
  {
    id: 2,
    title: "Modified UNet Model for Brain Stroke Lesion Segmentation on Computed Tomography Images.",
    journal: "Computers, Materials & Continua",
    url: "https://d1wqtxts1xzle7.cloudfront.net/108368584/TSP_CMC_20998-libre.pdf",
  },
  {
    id: 3,
    title: "Electronic Stethoscope for Heartbeat Abnormality Detection",
    journal: "Smart Computing and Communication: SmartCom 2020",
    url: "https://link.springer.com/book/10.1007/978-3-030-74717-6?page=2#toc",
  },
  {
    id: 4,
    title: "Detection of heartbeat abnormalities from phonocardiography using machine learning",
    journal: "2021 11th International Conference on Cloud Computing, Data Science & Engineering (Confluence)",
    url: "https://ieeexplore.ieee.org/abstract/document/9377164",
  }
];

export const PublicationSection = () => (
  <section id="publications" className="py-16 relative px-4">
    <div className="container mx-auto max-w-5xl">
      <div className="flex justify-center mb-4">
        <BookOpen className="h-8 w-8 text-primary" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Publications</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Explore my academic publications and research series.
      </p>

      <div className="text-center mb-8">
        <a
          href="https://scholar.google.com/citations?user=BrC2ulQAAAAJ&hl=en&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
          className="cosmic-button inline-block"
        >
          View on Google Scholar
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {publications.map((pub) => (
          <a
            key={pub.id}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg hover:bg-muted/20 group"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-foreground group-hover:underline">
                {pub.title}
              </h3>
              <ExternalLink size={16} className="text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">{pub.journal}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);
