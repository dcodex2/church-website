import { createReducer, on } from '@ngrx/store';
import * as GalleryActions from './gallery.actions';
import { GalleryEvent } from '../components/gallery/gallery.model';

export interface GalleryState {
  events: GalleryEvent[];
  eventImages: {
    [eventId: string]: string[];
  };
  loading: boolean;
}

export const initialState: GalleryState = {
  events: [],
  eventImages: {},
  loading: false,
};

export const galleryReducer = createReducer(
  initialState,

  // Load all events
  on(GalleryActions.loadGalleryEvents, (state) => ({
    ...state,
    loading: true,
  })),
  on(GalleryActions.loadGalleryEventsSuccess, (state, { events }) => ({
    ...state,
    events,
    loading: false,
  })),

  // Load images for a specific event
  on(GalleryActions.loadEventGallery, (state) => ({
    ...state,
    loading: true,
  })),
  on(GalleryActions.loadEventGallerySuccess, (state, { eventId, images }) => ({
    ...state,
    eventImages: {
      ...state.eventImages,
      [eventId]: images,
    },
    loading: false,
  }))
);
