export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  link: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
