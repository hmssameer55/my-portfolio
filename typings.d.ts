interface sanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface PageInfo extends sanityBody {
    _type: "pageInfo";
    name: string;
    role: string;
    address: string;
    phone: string;
    email: string;
    backgroundInfo: string;
    profilePic: Image;
    heroImage: Image;
    // socialMedia: Image[];
}

export interface Skill extends sanityBody {
    _type: "skill";
    name: string;
    icon: Image;
    progress: number;
}

export interface Project extends sanityBody {
    _type: "project";
    name: string;
    summary: string;
    image: Image;
    technologies: Skill[];
}

export interface Experience extends sanityBody {
    _type: "experience";
    jobTitle: string;
    company: string;
    companyLogo: Image;
    startDate: string;
    endDate: string;
    isCurrent?: boolean;
    points: string[];
}

export interface Social extends sanityBody {
    _type: "social";
    name: string;
    url: string;
}

