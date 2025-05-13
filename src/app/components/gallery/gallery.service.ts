import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  getDocs,
} from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';
import { GalleryEvent, GalleryImage } from './gallery.model';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  constructor(private firestore: Firestore) {}

  // getGalleryEvents(): Observable<GalleryEvent[]> {
  //   const ref = collection(this.firestore, 'galleryEvents');
  //   return from(getDocs(ref)).pipe(
  //     map((snapshot) =>
  //       snapshot.docs.map((doc) => ({
  //         ...(doc.data() as GalleryEvent),
  //         id: doc.id,
  //       }))
  //     )
  //   );
  // }

  // getEventImages(eventId: string): Observable<GalleryImage[]> {
  //   const ref = collection(this.firestore, `galleryEvents/${eventId}/images`);
  //   return collectionData(ref, { idField: 'id' }) as Observable<GalleryImage[]>;
  // }
}
