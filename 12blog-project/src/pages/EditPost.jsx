import { useState, useEffect } from "react";
import { Container, Postform } from "../Components";
import appwriteService from "../appwrite/blogs.config";
import { useNavigate, useParams } from "react-router";

export default function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug)
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
      });
    else navigate("/");
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <Postform post={post} />
      </Container>
    </div>
  ) : null;
}
