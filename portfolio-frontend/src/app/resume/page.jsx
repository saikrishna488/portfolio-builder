"use client";
import React, { useContext, useState, useRef, useEffect } from 'react';
import { globalContext } from '../../contextApi/GlobalContext';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';

// Define styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333333',
  },
  content: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555555',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: 20,
  },
});

const Home = () => {
  const resumeRef = useRef(null);
  const { data } = useContext(globalContext);
  const [loading, setLoading] = useState(false);
  const [pdfDocument, setPdfDocument] = useState(null);

  useEffect(() => {
    const captureResumeAsImage = async () => {
      setLoading(true);
      try {
        const canvas = await html2canvas(resumeRef.current);
        const imgData = canvas.toDataURL('image/png');

        // Create a PDF document with the captured image and resume fields
        const newPdfDocument = (
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.heading}>{data.name}</Text>
                <Text style={styles.content}>Field: {data.field}</Text>
                <Text style={styles.content}>Role: {data.role}</Text>
                <Text style={styles.content}>Description: {data.description}</Text>
                <Text style={styles.content}>Skills: {data.skills}</Text>
                <Text style={styles.content}>Certifications: {data.certifications}</Text>
                <Text style={styles.content}>Projects: {data.projects}</Text>
                <Text style={styles.content}>College: {data.college}</Text>
              </View>
            </Page>
          </Document>
        );

        setPdfDocument(newPdfDocument);
      } catch (error) {
        console.error('Error generating PDF:', error);
      } finally {
        setLoading(false);
      }
    };

    captureResumeAsImage();
  }, [data]);

  return (
    <div className="resume-container">
      <div className="resume-page" ref={resumeRef}>
        <h1>{data.name}</h1>
        <p>Field: {data.field}</p>
        <p>Role: {data.role}</p>
        <p>Description: {data.description}</p>
        <p>Skills: {data.skills}</p>
        <p>Certifications: {data.certifications}</p>
        <p>Projects: {data.projects}</p>
        <p>College: {data.college}</p>
        {/* You can add more HTML content for other fields */}
      </div>
      {pdfDocument && (
        <PDFDownloadLink document={pdfDocument} fileName="resume.pdf">
          {({ blob, url, loading: pdfLoading, error }) => (pdfLoading ? 'Loading...' : 'Download PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default Home;
